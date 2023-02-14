
export const  dateCustomRule=(node:any)=> {
    const date=new Date()
    const currentMonth=date.getMonth() + 1
    const currentYear=date.getFullYear().toString().slice(2,4)
    const value = node.value.split("/")
    if(value.includes("00")) return (false)
    return (value[1] > currentYear ? true : value[1] === currentYear ? value[0] >= currentMonth ? true : false : false)
}
