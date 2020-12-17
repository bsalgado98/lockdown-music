import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json

auth_manager = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth_manager)

results = sp.search(q='artist:' + 'Billie Eilish', type='artist')
print(json.dumps(results, indent=4, sort_keys=True))