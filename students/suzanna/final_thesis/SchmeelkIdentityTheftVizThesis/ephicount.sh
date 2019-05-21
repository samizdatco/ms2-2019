sed -e 's/[^[:alpha:]]/ /g' ephi.txt | tr '\n' " " |  tr -s " " | tr " " '\n'| tr 'A-Z' 'a-z' | sort | uniq -c | sort -nr | nl
