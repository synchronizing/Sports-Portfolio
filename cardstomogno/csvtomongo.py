import csv
import json
import pandas as pd
import sys, getopt, pprint
import json
from pymongo import MongoClient

csvfile = open('cards.csv', 'r')
reader = csv.DictReader( csvfile )

cards = []
with open('cards.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter=',')
    linecount = 0
    for row in readCSV:
        if linecount == 0:
            linecount += 1
            continue
        cardpart = {
            "set": row[0],
            "sport": row[1],
            "year": row[2],
            "condition": row[3],
            "setAmount": row[4]
        }
        playerpart = {
            "name": row[5],
            "team": row[6],
            "league": row[7],
            "setNumber": row[8]
        }
        images = {
            "front": row[9],
            "back": row[10]
        }
        
        document = {
            "card": cardpart,
            "player": playerpart,
            "images": images,
            "bought": row[12].lower() == 'true', 

        }
        cards.append(document)

# final = {
#     "cards": cards
# }
#okay now that I've read the file in and i have it as an object in final




client = MongoClient('mongodb://localhost:27017')
db = client.mean

cardz = db.cards
cardz.drop()
z = cardz.insert_many(cards)



