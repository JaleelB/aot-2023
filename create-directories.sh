#!/bin/bash

# Convert date to "days since epoch"
date_to_days() {
  date -jf "%Y-%m-%d" "$1" "+%s"
}

create_directory() {
  dir_name="day-$1"
  mkdir -p "$dir_name"
  echo "# Day $1 Challenge" > "$dir_name/problem.md"
  touch "$dir_name/solution.ts"
}

start_date="2023-12-01"
current_date=$(date '+%Y-%m-%d')

# Convert dates to days since epoch
start_day=$(date_to_days "$start_date")
current_day=$(date_to_days "$current_date")
day_diff=$(( (current_day - start_day) / 86400 ))

for (( i=1; i<=day_diff; i++ )); do
  day_dir="day-$i"
  if [ ! -d "$day_dir" ]; then
    create_directory "$i"
  fi
done
