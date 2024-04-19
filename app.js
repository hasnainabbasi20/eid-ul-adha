// var get_date=new Date().getTime()
// var user_age = prompt('enter your age')
// var dob = new Date(user_age).getTime()

// var minus_age = get_date - dob
// var formula = minus_age / (1000*60*60*24*365)

// document.write(Math.floor(formula))



var first_eid_date= new Date("16 jun 2024").getTime()
var today_date  = new Date().getTime()

var diff = first_eid_date - today_date

var remain_month = diff/(1000 * 60 *60 *24 *30)
console.log(Math.round(remain_month))

var remain_days = diff/ ( 1000 * 60 * 60 * 24 )
console.log(Math.round(remain_days))

var remain_hours = diff/ ( 1000 * 60 * 60)
console.log(Math.round(remain_hours))

var remain_sec = diff/ ( 1000 * 60 )
console.log(Math.round(remain_sec))

