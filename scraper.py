from bs4 import BeautifulSoup
import requests

url = 'https://en.wikipedia.org/wiki/List_of_largest_companies_in_the_United_States_by_revenue'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')
#print(soup)

#gets the table we want
table = soup.find_all('table')[1]

#getting thr rank, industry, all headers of the table
#[<th>Rank </th>, <th>Name </th>, <th>Industry</th>, <th>Revenue <br/>(USD millions)</th>, <th>Revenue growth</th>, <th>Employees</th>, <th>Headquarters</th>, 
worldTitles = table.find_all('th')
#gets only all the titles 
#['Rank', 'Name', 'Industry', 'Revenue (USD millions)', 'Revenue growth', 'Employees', 'Headquarters', 
world_table_titles = [title.text.strip() for title in worldTitles]
print(world_table_titles)
