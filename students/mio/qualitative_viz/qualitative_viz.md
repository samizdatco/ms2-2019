# Qualitative Visualizations: Drafts

## Subject + Topic + Question

For my three qualitative visualizations, I decided to focus broadly on these questions within the union of my two subjects of interest, neuro(science) and sexual violence/harassment:
How have women in science been treated throughout history? How has sexual harassment and sexism played a role in the advancement (or lack thereof) of women in science?

## Visual 1

![Visual 1: Sexism in Science, Timeline Version]()

### Data
I searched the terms "science", "sexism", and "women" in Google News Search for in the month of January, every ~five years from 2000 to present day (ie. January 01 - January 31 2000, January 01 - January 31 2005, etc). Because I couldn't find a way to automatically obtain all of the article entry titles, I manually selected the first 20 titles that appeared in the search. I did find a Google News API that I plan on exploring to get all of the titles for each year, if possible.

### Visualization
I categorized the titles into five categories, depending on the type of article it was: unrelated, if the article did not have to do with sexism of women in science; empowerment, if the article was written to empower or honor women; statement, if the article was asking a question, seeking to answer one, or was neutral; accusatorial, if the article accused a specific person or group of people of sexism; and warning, if the article projected a negative sentiment about the current state of society. They are color coded: white, green, yellow, aqua, and red, respectively.

The visualization is simple, where the article titles are listed in the corresponding spots on the timeline, and colored by their categorization. It is somewhat incomplete, because my dataset is incomplete.

### Improvements
Ideally this would be an interactive visualization, in which you could scroll through each year's articles and click on the link to read them (I do have the links to the articles)--I don't think this would be a very good static visualization.


## Visual 2

![Visual 2: Sexism in Science, Small Multiples Version]()

### Data
The same data from the first visual is used for this.

### Visualization
The same categorization from the first visual is used for this, except that the "unrelated" category is now black. I took a small multiples approach in which the article categories and numbers written each year (or rather, each January in each year) are visualized by the radii of the concentric circles. The total number of articles is visualized by the total radius of the concentric circles, although I may have to change this if the number of articles becomes larger.

### Improvements
I would want to get the concentric circle representation of every year, not just eight. If I wanted to make this interactive, I would have links to the articles within the different categories pop up when the user hovers over each part of the concentric circles.


## Visual 3

![Visual 3: Academic Sexual Misconduct Violations of Relationship Policies]()

### Data
I found an amazing dataset by the Geocornition Research Laboratory that has recorded all of the public academic sexual misconduct violations of relationship policies that has occured recently (the earliest is 1917, then jumps to 1978 onwards). It lists the name, institution, position, discipline, details of outcome, and news articles related to the case, amongst other information. I extracted those from scientific disciplines for my visualization.

[Source](https://docs.google.com/spreadsheets/d/1CCfcCKmBqyrMbD6fEQ8Llt3eD9MpnUd5eVm2DaIrUKo/edit#gid=0)

### Visualization
The purpose of this visualization is to get the names out there, as well as show the sheer number of men (and some women) who have been accused. I was trying to visualize it in a different way, but couldn't get all of the names to fit. Even in this style, I couldn't get all of the names from the 2010s to fit in the allotted space. It kind of ended up being just a list rather than a visualization

### Improvements
I think this one definitely needs to be interactive, because there is too much information that I want to show. In hindsight, maybe I should have clustered them into disciplines, but the names are the important information in this dataset. I didn't want to sacrifice the names for aesthetic purposes. An interactive timeline is intriguing, with pop ups for each year listing the information of the person indicted, summary of what happened, and links to the case.






