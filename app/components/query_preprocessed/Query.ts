



export function formatDateAndHour(date : Date, hour : number) {
    
    date.setHours(hour);
    
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0'); 
    const hours = date.getHours().toString().padStart(2, '0'); 
    
    const formattedDate = `${year}-${month}-${day} ${hours}:00:00`;
    
    return formattedDate;
}