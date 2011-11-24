# denormalize FS tables. 
import sys
import sqlite3
import glob 
import csv

def import_table(conn, source, path, coding):
    fp = open(path, 'rb')
    reader = csv.reader(fp, delimiter=';')
    it = iter(reader)
    headers = it.next()
    q = ', '.join(["%s TEXT" % h for h in headers])
    conn.execute("CREATE TABLE IF NOT EXISTS %s (%s);" % (source, q))
    p = ', '.join(['?']*len(headers))
    print headers
    for row in reader:
        row = [c.decode(coding) for c in row]
        conn.execute("INSERT INTO %s VALUES (%s);" % (source, p), row)
    conn.commit()

def denormalize(country, coding):
    conn = sqlite3.connect(country + ".denorm.db")
    for source in ['payment', 'scheme', 'recipient']:
        path = glob.glob(country + "/" + source + "*")[-1]
        import_table(conn, source, path, coding)

    fh = open(country + '.csv', 'wb')
    writer = None
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT * FROM payment p LEFT JOIN recipient r ON "
        "r.globalRecipientId = p.globalRecipientId LEFT JOIN scheme s ON "
        "s.GlobalSchemeId = p.globalSchemeId;")
    for row in c:
        if writer is None:
            writer = csv.writer(fh)
            writer.writerow(row.keys())
        writer.writerow([row[k].encode('utf-8') for k in row.keys()])

    fh.close()
if __name__ == '__main__':
    country = sys.argv[1]
    coding = sys.argv[2]
    denormalize(country, coding)
