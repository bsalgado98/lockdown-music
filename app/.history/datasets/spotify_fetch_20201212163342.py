import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
import csv

auth_manager = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth_manager)

def get_artist_genre(artist):
    results = sp.search(q='artist:' + artist, type='artist')
    # print(json.dumps(results, indent=4, sort_keys=True))
    artists = results['artists']
    items = artists['items']
    genres = items[0]['genres']
    return genres
    
def parse_genre(genres):
    GENRES=['pop', 'rock', 'hip-hop', 'dance', 'country']

grammys = []

with open('the_grammy_awards.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        grammys.append(row)

def clean_artist_name(artist):
    stop_words = ['Featuring']
    stop_index = len(artist)
    for sw in stop_words:
        stop_index = artist.find(sw)
        if stop_index != -1:
            return artist[:stop_index]

        

def build_artist_genres(data):
    result = {}
    for row in data:
        artist = row.get('artist')
        print(artist)
        result[artist] = get_artist_genre(artist)
    return result

# artist_genres = build_artist_genres(grammys)
# print(artist_genres)

# test = "Lil Nas X Featuring Billy Ray Cyrus"
test = "Billie Eilish"
print(clean_artist_name(test))