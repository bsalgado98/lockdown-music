import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
import csv

auth_manager = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth_manager)

# results = sp.search(q='artist:' + 'Billie Eilish', type='artist')
# print(json.dumps(results, indent=4, sort_keys=True))

grammys = []

with open('the_grammy_awards.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        grammys.append(row)

print(grammys[0][1])        