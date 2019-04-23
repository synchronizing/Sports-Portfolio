import csv
import json
import pandas as pd
import sys, getopt, pprint
import json
from pymongo import MongoClient

csvfile = open('cards.csv', 'r')
reader = csv.DictReader( csvfile )
header = ['set', 'sport', 'year', 'condition']
# for each in reader:
#     for thing in each:
#         print(thing[0])
#         print(thing[1])
#     # for field in header:
#     #     print(each[field])
#     print("\n\n\n\n\n\n\n\n\n\n")



with open('cards.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter=',')
    for row in readCSV:
        print(row)
        
        # print(row[0])
        # print(row[0],row[1],row[2],)

# df = pd.read_csv('cards.csv',encoding = 'ISO-8859-1')   # loading csv file
# for row in df:
#     print(row)
# df.to_json('cards.json')   








print("hello?")



