-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Music_Data" (
    "Song" VARCHAR(400),
    "Song_Url" VARCHAR(400),
    "Country" VARCHAR(400),
    "Song_Genres" VARCHAR(400),
    "Artists" VARCHAR(600),
    "Artist_Country" VARCHAR(400),
    "Spotify_Stream_Total" BIGINT,
    "Spotify_Stream_Change" BIGINT,
    "Spotify_Stream_Change_%" NUMERIC,
    "Spotify_Popularity_Total" SMALLINT,
    "Spotify_Popularity_Change" SMALLINT,
    "Spotify_Popularity_Change_%" NUMERIC,
    "Year_Released" INT,
    CONSTRAINT "pk_Music_Data" PRIMARY KEY (
        "Song_Url"
     )
);

