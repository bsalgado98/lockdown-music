import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
import csv
from collections import defaultdict
import operator
import pdb

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

with open('grammys_artists.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        grammys.append(row)

def clean_artist_name(artist):
    artist = artist.strip()
    stop_words = ['Featuring', ',', '&']
    for sw in stop_words:
        stop_index = artist.find(sw)
        if stop_index != -1:
            return artist[:stop_index]            
    return artist.strip()

def get_artist_from_workers(row):
    workers = row.get('workers')
    l_paren = workers.find('(')
    r_paren = workers.find(')')
    artist = workers[l_paren + 1:r_paren]
    return clean_artist_name(artist)

def build_artist_genres(data):
    result = {}
    counter = 1
    for row in data:
        artist = clean_artist_name(row.get('artist')).strip()
        # If no artist, get artist from workers
        if artist == '':
            artist = get_artist_from_workers(row).strip()
        # If no workers, get artist from nominee            
        if artist == '':
            artist = row.get('nominee').strip()
        result[artist] = get_artist_genre(artist)
        print(f'{counter}, ', end="", flush=True)
        counter += 1
    return result

def narrow_genre(genres):
    acceptable_genres = ['r&b', 'rap', 'jazz', 'rock', 'folk', 'indie', 'pop', 'country']
    genre_mode = defaultdict(int)
    for genre in genres:
        for word in genre:
            if word in acceptable_genres:
                genre_mode[word] += 1
    return max(genre_mode.items(), key=operator.itemgetter(1))[0]



artist_genres = build_artist_genres(grammys)
print("result:")
print(artist_genres)