{
  "dataset": {
    "name": "eu-cap",
    "label": "EU Farm Subsidies",
    "description": "...",
    "currency": "EUR"
  },
  "mapping": {
    "amount": {
      "type": "measure",
      "datatype": "float",
      "label": "Amount (in Euro)",
      "column": "amountEuro"
    },
    "amount_national": {
      "type": "measure",
      "datatype": "float",
      "label": "Amount (in national currency)",
      "column": "amountNationalCurrency",
      "default_value": "0.0"
    },
    "time": {
      "type": "date",
      "datatype": "date",
      "label": "Year of Payment",
      "column": "year"
    },
    "globalPaymentId": {
      "type": "attribute", 
      "datatype": "string",
      "label": "Payment ID (global)",
      "column": "globalPaymentId",
      "key": true
    },
    "country": {
      "type": "attribute",
      "datatype": "string",
      "label": "Country of Payment",
      "column": "countryPayment",
      "default_value": "(unknown)"
    },
    "to": {
      "type": "compound",
      "label": "Recipient",
      "fields": [
        {"name": "name", "datatype": "id", "column": "globalRecipientIdx"},
        {"name": "label", "datatype": "string", "column": "name"},
        {"name": "address1", "datatype": "string", "column": "address1"},
        {"name": "address2", "datatype": "string", "column": "address2"},
        {"name": "zipcode", "datatype": "string", "column": "zipcode"},
        {"name": "town", "datatype": "string", "column": "town"},
        {"name": "country", "datatype": "string", "column": "countryRecipient"},
        {"name": "geo1", "datatype": "string", "column": "geo1"},
        {"name": "geo2", "datatype": "string", "column": "geo2"},
        {"name": "geo3", "datatype": "string", "column": "geo3"},
        {"name": "geo4", "datatype": "string", "column": "geo4"},
        {"name": "geo1NationalLanguage", "datatype": "string", 
          "column": "geo1NationalLanguage"},
        {"name": "geo2NationalLanguage", "datatype": "string", 
          "column": "geo2NationalLanguage"},
        {"name": "geo3NationalLanguage", "datatype": "string", 
          "column": "geo3NationalLanguage"},
        {"name": "geo4NationalLanguage", "datatype": "string", 
          "column": "geo4NationalLanguage"},
        {"name": "lat", "datatype": "string", "column": "lat"},
        {"name": "lng", "datatype": "string", "column": "lng"}
      ]
    },
    "scheme": {
      "type": "compound",
      "label": "Scheme",
      "fields": [
        {"name": "name", "datatype": "id", "column": "globalSchemeId"},
        {"name": "label", "datatype": "string", "column": "nameEnglish"},
        {"name": "label_national", "datatype": "string", 
          "column": "nameNationalLanguage"},
        {"name": "budget_lines", "datatype": "string", 
          "column": "budgetlines8Digit"}
      ]
    }
  },
  "views": []
}
