FarmSubsidies OpenSpending Import 
=================================

This is a datapackage / wrangling log for how to import CAP payments 
into OpenSpending. The best - albeit indirect - source of the data is
EU Transparency's FarmSubsdies.org which offers source data under a
CC-BY-SA license.

Steps: 

* Download each of the country source files (<CODE>.zip) to a common 
  directory and extract them. You will have 27 folders.
* Run denorm.py (see below)
* Load into OpenSpending
* ??
* Profit!


denorm.py
---------

Usage::

  python denorm.py <CODE> utf-8

(Where code is a country code.)

What it does: Data comes in three CSV files per country, which are 
loaded into a SQLite store. There, they are joined together:

SELECT * FROM payment p LEFT JOIN recipient r 
  ON r.globalRecipientId = p.globalRecipientId 
  LEFT JOIN scheme s ON s.GlobalSchemeId = p.globalSchemeId;

The output will be put into a CSV file (<CODE>.csv). 

Contact
-------

* https://github.com/pudo/dpkg-eu-cap/issues



