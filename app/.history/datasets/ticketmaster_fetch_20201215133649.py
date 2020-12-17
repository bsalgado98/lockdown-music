import requests

drake_search = requests.get("https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=XVIitxwtW5zGxSpmVBc1pZ2mFuXvnuPV")

print(drake_search.json())