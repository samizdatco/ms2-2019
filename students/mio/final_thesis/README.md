# Cutting Edge? Not So Much.
## Sexual misconduct, harassment, and discrimination: tackling the outdated treatment of women in STEM Academia

Website: https://miopio.github.io/ms1-project

Paper: https://github.com/miopio/ms1-project/blob/master/project%20paper/MS1_thesis.pdf


## Project Abstract
STEM academia, a historically male dominated environment, has brought many bouts of hardship to women pursuing careers in the field. Sexual misconduct, harassment, and discrimination are rampant--the National Academy of Sciences reported in 2018 that the rate of sexual harassment in STEM is second only to that of the military. These cases of sexual harassment are often times overlooked and even condoned by institutions that first and foremost are concerned about their reputations, and the reputations of those who bring them recognition and funding. Perpetuating these behaviors is harmful to society as a whole--having imbalanced representation in STEM research not only negatively impacts the women in the field, but spreads to other areas of society. For example, because clinical trials and medical research have historically been conducted on male populations, women’s medical conditions are frequently misdiagnosed and leads to higher rates of mortality in women (i.e. misdiagnosis of heart attacks).

Through the visualization of publicly available sexual misconduct cases, detailed timelines of the careers of prominent investigators felled by sexual misconduct allegations, and a longitudinal look at the numbers of women pursuing careers in STEM academia, I point out the magnitude of the problem and the implications of it that have long hindered women in STEM: many cases of sexual misconduct conclude with little to no action by the institutions, and behind each formal case of sexual misconduct lies multiple unreported allegations of harassment. The pipeline problem for women in STEM academia is severe, with the rates of women pursuing careers in STEM academia dropping to as low as ~8% from ~50% at the undergraduate level. Institutions and national organizations must hold perpetrators of sexual misconduct accountable for their actions in a timely manner, and provide resources to support women who have experienced harassment in order to increase the retention rates of women pursuing STEM academia. 


*Though sexual harassment affects male-identifying, gender non-binary, and transgender populations, in this paper I will be focusing predominantly on sexism & sexual harassment pertaining to women and women-identifying populations.*

## Process
#### Sexual Misconduct Overview
From the sexual misconduct database, I imported only the cases that were of academics in STEM disciplines into a .csv file. The data points given are as follows: “Last updated”, “Year of first incident”, “Year”, “Name”, “Multiple Institutions/Positions (repeat misconduct)”, “Administrator, Department, Faculty, Researcher, Coach”, “Position title”, “Discipline or domain”, “Institution and/or Professional Society”, “Details of outcome” and “Links”. For the sake of consolidation, I summarized the “Details of outcome” in a one word summary that best categorized the outcome, which I listed in a new column. If there were multiple outcomes, I chose the outcome with more serious implications. Initially, I had around 16 categories, which I merged down to nine; though merging further would have aided in ease of comprehension, I decided to keep the nine categories because they were distinct enough to merit separation. I then assigned colors to each category, and inputted these colors into another column. 

For the visualization, it was necessary to find a way to represent each individual case in the context of a whole. I turned towards a dot plot histogram after being inspired by the way it was used in the Pudding article, “Film Dialogue”, to visualize individual film screenplays across a spectrum of the rate of words allocated to men vs women. In D3, I plotted the dots in bins corresponding to years from 1980 to 2018. Each dot represents an individual case: the outcome is indicated by the color, while additional details of the case can be obtained by hovering over it (Name of perpetrator, discipline, institution). I also made it possible for users to be taken to a news article that covered the case upon clicking the dot.

The histogram served its purpose of allowing for interaction with each individual case, but it was difficult to visually observe the numbers of cases that came to each outcome in the stacked chart. I decided to remedy this by allowing the user to filter results by outcome. I inserted buttons for each outcome category, which upon clicking, updates the histogram to include only the dots for the selected category. This made tracking the numbers of cases in each category over time a little easier. 

![Dot plot histogram for sexual misconduct database](https://github.com/miopio/ms1-project/blob/master/demo/sexual_misconduct.png)

#### Sexual Misconduct Case Studies
I wanted to visualize each of the three case studies I selected on its own timeline--for each timeline, I wanted to compare incidents of sexual misconduct vs notable career achievements over time. To organize the data in a form that would be callable, I inputted the text data obtained from the media articles mentioned above in .csv files. I recorded the year, name of complainant (if any), and description of the incident. The timeline was made with D3.

Each timeline was represented by a rectangle, one end being 1970 and the other end 2019. Each incident was indicated by a line on the rectangle. It was easiest to do this by converting the year of each incident into a start date and an end date to use as coordinates for very thin rectangles that looked like lines. I encoded the type of incident by the color of these lines, which I encoded in the .csv as numbers: “0” for white, representing notable career achievements,, “1” for red, indicating incidents of sexual misconduct,  and “2” for yellow, indicating official complaints made and their results. The details of the incidents could be seen by hovering over the lines. 

Though this was a workable visualization, it was necessary to have some data points that were static, so users could get a general overview of each person’s timeline without interacting with the data. In order to do this, I picked a few incidents to represent at static text captions, and encoded this in the .csv under a “status” column: “0” for not visible, “1” for static. These incidents were then plotted on the timeline, depending on their category type--career achievements and official complaints were plotted on top, while incidents of harassment were plotted on the bottom. The aim was to create a sort of dichotomy of “good” vs “bad” across the timeline of each person’s career.

![Inder Verma](https://github.com/miopio/ms1-project/blob/master/demo/inder_verma.png)
![Francisco Ayala](https://github.com/miopio/ms1-project/blob/master/demo/francisco_ayala.png)
![Lawrence Krauss](https://github.com/miopio/ms1-project/blob/master/demo/lawrence_krauss.png)

#### Retention Rates of Women in STEM Academia
To paint an easily comprehensible picture of the numbers of women in STEM academia, I consolidated the data from the Columbia and NYU faculty equity reports into two graphs: one, which compared the rates of female tenured/tenure-track professors in STEM to other disciplines, and two, which compared the rates of females at each step in the academic career ladder in STEM academia. The former required some data processing in order to match the data from Columbia to that of NYU. The percent rates had to be calculated by raw numbers of people, and the years used were only the years that had complete data from both datasets--Columbia published numbers for 2000 and every year from 2004 to 2016, while NYU published every five years from 2000 to 2010, and every two years from 2010 to 2018. The latter graph was made only by data from Columbia, because it was not possible to extract this data from the NYU reports. This required combining information found from three Columbia reports into one graphic, although no additional calculation was necessary to clean the data. The first graph was made in Excel then edited in Illustrator, while the second graph was made and edited in Illustrator.

![Women in STEM Academia pt 1](https://github.com/miopio/ms1-project/blob/master/demo/retention_1.png)
![Women in STEM Academia pt 2](https://github.com/miopio/ms1-project/blob/master/demo/retention_2.png)

## Project Demo

[See a video demo of the project here](https://github.com/miopio/ms1-project/blob/master/demo/demo_video.mov)

## Data Sources

### Easy access to main data sources for visualizations:
#### I. Sexual Misconduct Overview
Geocognitive Research Laboratory, Michigan State University
- https://geocognitionresearchlaboratory.com/2018/08/20/the-academic-sexual-misconduct-database/

#### II. Sexual Misconduct Case Studies
Inder Verma
- https://sci-hub.tw/http://science.sciencemag.org/content/360/6388/480/tab-pdf
Francisco Ayala
- http://ulum.es/wp-content/uploads/2018/07/Informe-Ayala.pdf
Lawrence Krauss
- https://www.buzzfeednews.com/article/peteraldhous/lawrence-krauss-sexual-harassment-allegations

#### III. Retention Rates of Women in Stem Academia
Columbia University
- https://fas.columbia.edu/files/fas/content/Columbia-ArtsandSciences-PPC-Equity-Reports-2018.pdf
- http://senate.columbia.edu/archives/reports_archive/14-15/csw_pipeline%20report_2004-13.pdf
- http://senate.columbia.edu/archives/reports_archive/01-02/Advancement.pdf

NYU
- http://as.nyu.edu/content/dam/nyu-as/as/documents/2018EquityStudy.pdf

### Additional references used in text portion of site
- Advancement of Women Through the Academic Ranks of the Columbia University Graduate School of Arts and Sciences: Where Are the Leaks in the Pipeline? Report. The Commission on the Status of Women, Columbia University. November 2001.
- Aldhous, Peter. "Celebrity Atheist Lawrence Krauss Accused Of Sexual Misconduct For Over A Decade." BuzzFeed News. October 13, 2018. Accessed May 07, 2019. https://www.buzzfeednews.com/article/peteraldhous/lawrence-krauss-sexual-harassment-allegations.
- Brown, Sarah. "This Scientist Was the Architect of #MeTooSTEM. Now Others Are Fighting to Save Her Job." The Chronicle of Higher Education. March 01, 2019. Accessed March 26, 2019. https://www.chronicle.com/article/This-Scientist-Was-the/245806.
- Corbyn, Zoë. "BethAnn McLaughlin: 'Too Many Women in Science Have to Run the Gauntlet of Abuse and Leave'." The Guardian. April 07, 2019. Accessed May 07, 2019. https://www.theguardian.com/science/2019/apr/07/bethann-mclaughlin-sexual-harassment-in-science.
- Geocognition Research Laboratory. "The Academic Sexual Misconduct and Violations of Relationship Policies Database." GEOCOGNITION RESEARCH LABORATORY. September 15, 2018. Accessed March 26, 2019. https://geocognitionresearchlaboratory.com/2018/08/20/the-academic-sexual-misconduct-database/.
- "Home." Me Too STEM. Accessed March 26, 2019. https://metoostem.com/.
- Pelowitz, Erik, and Karen Bell. Findings of the Office of Equal Opportunity and Diversity (OEOD).Report. Office of Equal Opportunity and Diversity, University of California Irvine. May 16, 2018.
- Policy and Planning Committee Equity Reports.Report. Policy and Planning Committee, Columbia University. October 2018.
- Science & Engineering Indicators 2016. National Science Board. Place of Publication Not Identified: Distributed by ERIC Clearinghouse, 2016.
- Sexual Harassment of Women: Climate, Culture, and Consequences in Academic Sciences, Engineering, and Medicine. Washington D.C.: National Academies Press, 2018.
- Shoshkes Reiss, Carol, and Andre Fenton. Faculty of Arts and Sciences Equity Committee Executive Summary of Data to End of 17/18 Academic Year and Recommendations. Report. Faculty of Arts and Sciences Equity Committee, New York University.
- Tolstoy, Maya. 2004-2013 Update: Advancement of Women Through the Academic Ranks of the Columbia University Graduate School of Arts and Sciences: Where Are the Leaks in the Pipeline? Report. Commission on the Status of Women, Professor Daniel Rabinowitz (Dept of Statistics), Columbia University Senate, Columbia University. April 20, 2015.
- Wadman, Meredith. "A Hidden History." Science. May 04, 2018. Accessed May 07, 2019. http://science.sciencemag.org/content/360/6388/480.full.
- Wadman, Meredith. "Vanderbilt Panel Weighs in against Tenure for #MeToo Scientist." Science. March 11, 2019. Accessed May 07, 2019. https://www.sciencemag.org/news/2019/03/vanderbilt-panel-votes-against-tenure-metoo-scientist.
- "Women in Science Take on Sexual Harassment." Feature | Women in Science Take on Sexual Harassment. Accessed March 26, 2019. http://www.asbmb.org/asbmbtoday/201809/Feature/Harassment/.
