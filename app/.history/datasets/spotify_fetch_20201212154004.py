import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
import csv

auth_manager = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth_manager)

# results = sp.search(q='artist:' + 'Billie Eilish', type='artist')
# print(json.dumps(results, indent=4, sort_keys=True))

with open('the_grammy_awards.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        print(f'\t{row["name"]} works in the {row["department"]} department, and was born in {row["birthday month"]}.')
        line_count += 1
    print(f'Processed {line_count} lines.')