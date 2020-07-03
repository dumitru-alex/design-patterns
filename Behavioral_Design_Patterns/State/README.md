- example done on implementing a subscription management system

3 States:
`OnTrial`
- the user is given a limited amount of time to test the app for free
- if the time expires, state changes to `Trial Expired`
- if he pays, stated goes to `Paid`
`Paid`
- n/a
`Trial Expired`
- if the user pays while in this stage, the state chages to `Paid` as well.