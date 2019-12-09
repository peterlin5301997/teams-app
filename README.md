## Teams Page

1. Display a two-column layout of American League and National League teams
  * Fields to display:
    * team name
    * venue name
    * link to team roster
  * Inspiration: https://www.mlb.com/team
2. When the roster link is clicked, we should display a new view that lists the team's full roster
  * Fields to display:
    * player name
    * current age
    * height
    * weight
    * primary position

## Data Source

#### Teams Endpoint
```
http://statsapi.mlb.com/api/v1/teams?sportId=1
```

#### Roster Endpoint
```
http://statsapi.mlb.com/api/v1/teams/133/roster?sportId=1&hydrate=person
```
