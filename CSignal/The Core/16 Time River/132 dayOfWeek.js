function dayOfWeek(birthdayDate) {
    //figure out the day of the week
        //find out how many weeks away the date to our base is
    //figure out how many years until same day of week
    
    const [m,d,y] = birthdayDate.split('-');
    
    //base date 1-1-2000 - saturday
    const bm = 1;
    const bd = 1;
    const by = 2000;
    
    let daysAdded = 0;
    if (parseInt(y) > by) {
        for (let i = 2000; i < parseInt(y); i++) {
            if (i % 4 == 0) {
                daysAdded += 2;
            } else daysAdded++;
        }
        if (parseInt(y) % 4 == 0 && parseInt(m) > 2) {
            daysAdded +=2;
        } else daysAdded++;
        
    } else if (parseInt(y) < by) {
        for (let i = 2000; i > parseInt(y) - 1; i--) {
            
        }
    }
    return daysAdded;
}
// 21
// m 
// tu
// w
// th
// f
// sa 21 days
// su

//2-26-1989 sunday