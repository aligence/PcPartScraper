from bs4 import BeautifulSoup
import requests
import csv

def scraperData(productUrl):
    HEADERS = ({'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36', 'Accept-Language': 'en-US, en;q=0.5'})
    #url = 'https://www.amazon.com/PNY-GeForce-Gaming-Triple-Graphics/dp/B0C5P615P7/ref=sr_1_1_sspa?crid=3U7D02HGIQSWK&keywords=gpu&qid=1707786540&sprefix=gpu%2Caps%2C166&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
    #makes req to url
    page = requests.get(productUrl, headers=HEADERS)

    #html is the pages text
    html = page.text
    """with open('prodFile', 'w', newline='') as file:
        writer = csv.writer(html)"""
    #parses the html
    soup = BeautifulSoup(html, 'html.parser')
    #trying to find item-cell (this is only for when im using the link for mutliple gpus)
    #cells = soup.find_all("div", attrs={"class": "item-cell"})

    #finding prod name of specific item page
    productName = soup.find("span", attrs={'id': 'productTitle'}).text.strip()
    #finding product price
    productPrice = soup.find('span', attrs={'class': 'a-price-whole'}).text.strip()
    #product Singular Link Image (had to get the location first)
    productImageLocation = soup.find('img', attrs={'id': 'landingImage'})
    productImageLink = productImageLocation.get('src')
    return {
        'productName': productName,
        'productPrice': productPrice,
        'productImageLink': productImageLink
    }



