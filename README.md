# Project3

## **Table of Contents**

- [Project3](#project3)
  - [**Table of Contents**](#table-of-contents)
  - [**Project Overview**](#project-overview)
  - [**Features**](#features)
  - [**Technologies / Dependencies Needed and Used**](#technologies--dependencies-needed-and-used)
  - [**How to Run the Application**](#how-to-run-the-application)
  - [**Visualizations**](#visualizations)
  - [**Visualization Details**](#visualization-details)
  - [**Visualization Details**](#visualization-details-1)
  - [**Data Source**](#data-source)
  - [**Team Responsibilities**](#team-responsibilities)
  - [**Sources**](#sources)
  - [**Additional Information**](#additional-information)
  - [**License**](#license)
  - [**Project By**](#project-by)
  - [**Contact**](#contact)

## **Project Overview**
![Music Genre Analysis Dashboard Image](images/music_genre_analysis_dashboard_image.png)<br>
&nbsp;&nbsp;&nbsp;&nbsp;The aim of our project is to look at the change in popularity of music genres across the years of 2015 to 2024. The data we will be working with is Spotify track streams. We will be looking at the number of total streams a genre has on spotify. To do this we will first divide the tracks into years they were released. We will then get the genre of each track within and divide the tracks into the genre they belong to. Finally we will add all the number of track streams within a given genre and year and compare those to other genres within the same year. 


## **Features**
* Interactive Map: Allows users to interact with geographical data related to music genre popularity by hovering or using a slider on others.
* Interactive Dashboard: Allows users to interact with data related to music genre popularity across many years using a drop down menu to filter based on year to visualize in an all encompassing dashboard.

## **Technologies / Dependencies Needed and Used**
- **Pandas**: Used for handling and analyzing large datasets, particularly in tabular form (e.g., DataFrames).
- **SQL**: Used for managing and querying relational databases. It allows you to retrieve, update, and manage data stored in a structured format.
- **PostgreSQL**: A relational database management system (RDBMS) used for storing and querying structured data. It provides support for advanced SQL queries and is widely used in production environments for managing databases.
- **re**: The regular expression (regex) library in Python. It provides a way to search for patterns in text, making it useful for text processing and data cleaning tasks.
- **defaultdict**: A subclass of Python's built-in `dict` that provides a default value for missing keys. It helps simplify handling missing keys during data manipulation.
- **tabulate**: A library used for creating well-formatted plain-text tables. It is helpful for presenting data in a readable format when working with outputs from Python scripts.
- **plotnine**: A data visualization library in Python based on the grammar of graphics. It is used for creating static, high-quality plots and charts.
- **nbformat**: A library for reading and writing Jupyter notebook files (`.ipynb`). It is used for programmatically working with Jupyter notebooks, especially for parsing or manipulating notebook content. (For whatever reason, we needed this)
- **SQLiteStudio**: Used to Ctcreate and modify SQLite databases without needing to write complex SQL commands. rowse and edit tables, views, and indexes. Execute SQL queries and scripts directly from the interface. Export data and generate SQL code for table structures and data.
-  **SQLite3**: Used for applications that need to store structured data locally without requiring a separate server or complex setup. It operates as a self-contained, serverless, zero-configuration database engine.
-  **Plotly**: Plotly's Python is a graphing library that makes interactive, publication-quality graphs. Examples of how to make line plots, scatter plots, area charts, bar charts, error bars, box plots, histograms, heatmaps, subplots, multiple-axes, polar charts, and bubble charts.
- **JSON**:  Is a widely-used text-based format for data interchange. Used to effectively handle JSON data.


## **How to Run the Application**
1. Download and install Dependencies as needed.
2. Open and run Project_3_test_2.ipynb notebook to setup and start cleaning.
3. Open and run queries_and_visualizations.ipynb notebook to start running multiple queries on 1 set of the data.
4. Open and run Genreyearpull.ipynb to start the interactive visualizations.
5. Genreyearpull with convert pandas dataframe to jsonfile called spotify_complete_analysis.json
6. Open all files in Project_3_visualizations which includes the spotify_complete_analysis.json, music_data.json, index.html,and the app.js file within the static folder
7. Run index.html in liveserver 
8. Interact with visualization sample links below.
## **Visualizations**
<div style="display: flex; justify-content: space-between;">
    <img src="images/ggplot_1925_2030.svg" alt="ggplot 1925 - 2030" width="450">
    <img src="images/ggplot_1955_2030.svg" alt="ggplot 1955 - 2030" width="450">
</div>

[Genre Dashboard](https://miltonluke.github.io/Project3/Project_3_visualizations/index.html)

[Github Pages Interactive map 1](https://miltonluke.github.io/Project3/html/spotify_stream_total_plot.html)

[Github Pages Interactive plot 1](https://miltonluke.github.io/Project3/html/12plot_spotify_stream_total_1990_2025.html)

[Github Pages Interactive plot 2](https://miltonluke.github.io/Project3/html/12plot_spotify_stream_total_2015_2025.html)

[Github Pages Interactive plot 3](https://miltonluke.github.io/Project3/html/spotify_rock_streams_by_year.html)

[Github Pages Interactive plot 4](https://miltonluke.github.io/Project3/html/spotify_pop_streams_by_year.html)

[Github Pages Interactive plot 5](https://miltonluke.github.io/Project3/html/spotify_Hip_Hop_streams_by_year.html)

[Github Pages Interactive plot 6](https://miltonluke.github.io/Project3/html/spotify_genre_streams_by_year_grouped.html)

[Sample use of the Tabulate library](https://miltonluke.github.io/Project3/images/sample_tabulate.png)

## **Visualization Details**
- A drop down that displays a bar graph that gives the top 10 most streamed genres of a given year
- A drop down displays a pie chart of the top ten most streamed genres by percentage
- A line graph that displays total streams across all genres over release years

## **Visualization Details**
- Spotify info
## **Data Source**
  - Soundcharts (See "Additional Information" on How Spotify and Streaming  are Measured here) [**Additional Information**](#additional-information)

## **Team Responsibilities**
- Lynn: Working on creating the PowerPoint presentation that will be given to the class. 
- Matt: Matt is cleaned up the data from csv file. Found the soundcharts page the project pulled its data from. Worked on the gg plot visualizations
- Dylan: Setting up the sql and postgress for the data. Worked on cleaining the csvs.
- Luke: Worked on the javascript/Plotly visualizations. 
- Connor: Worked on the javascript/Plotly visualizations. Wrote project summary.


## **Sources**
* [Soundcharts](https://app.soundcharts.com/app/market/tracks?filters=eyJzIjoiYXVkaWVuY2Uuc3BvdGlmeXxkZXNjfG1vbnRofHRvdGFsIiwiZiI6eyJmYyI6IkFMTF9DT1VOVFJJRVMiLCJmdHNnIjoiQUxMX0dFTlJFUyJ9LCJtaSI6W119)
* [Pandas](https://pandas.pydata.org/docs/)
* [SQL](https://www.w3schools.com/sql/sql_quickref.asp)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [re](https://docs.python.org/3/library/re.html)
* [ggplot](https://realpython.com/ggplot-python/)
* [defaultdict](https://www.geeksforgeeks.org/defaultdict-in-python/)
* [tabulate](https://www.datacamp.com/tutorial/python-tabulate)
* [plotnine](https://plotnine.org/)
* [nbformat](https://nbformat.readthedocs.io/en/latest/)
* [SQLiteStudio](https://sqlitestudio.pl/)
* [SQLite3](https://docs.python.org/3/library/sqlite3.html)
* [Plotly](https://plotly.com/python/)
* [JSON](https://realpython.com/python-json/)
* [releese.io](https://releese.io/article/what-counts-as-a-stream-on-spotify/)
* [RapidAPI](https://rapidapi.com/DataFanatic/api/spotify-scraper/playground/apiendpoint_e96f3af6-417b-4ef0-b801-908fb9344e70)

## **Additional Information**
* Initial Data Cleaning......
* Regex used to sort for just the numerical 4-digit year in `Project_3_test2.ipynb`:
  - This was a unique case due to the data in the 'Release date'. A simple `.fillna` approach wouldn't work. We had to first fill NaN values with a string version of '1776' to avoid breaking the regex when encountering an integer instead of a string.
  - Steps:
    - Fill NaN values in 'Release date' with '1776' and convert to string:
      ```python
      df_cleaned['Year Released'] = df_cleaned['Release date'].fillna('1776').astype(str)
      ```
    - Extract the year from 'Year Released' using regex:
      ```python
      df_cleaned['Year Released'] = df_cleaned['Year Released'].str.extract(r'(\d{4})')
      ```
    - Fill any remaining NaN values in 'Year Released' with '1776':
      ```python
      df_cleaned['Year Released'] = df_cleaned['Year Released'].fillna('1776')
      ```
    - Convert the 'Year Released' column to integers for further mathematical operations:
      ```python
      df_cleaned['Year Released'] = df_cleaned['Year Released'].astype(int)
      ```


* More info on Spotify / Streaming counting. [**What counts as a stream on Spotify?**](https://releese.io/article/what-counts-as-a-stream-on-spotify/)


## **License**
This project is licensed under the [GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007](./LICENSE) - see the LICENSE file for details here.

## **Project By**
**Connor Casey**<br>
**Dylan M**<br>
**Luke Milton**<br>
**Lynn Soors**<br>
**Matthew Matti**



## **Contact**
For any questions or feedback, feel free to reach out to 

![License](https://img.shields.io/badge/license-GPL%203-blue)
