import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const utilize = {
    //********** */ handle eclipis word by length word
    handleWrapText(value, lengthWord=100){
        if(value.length >= lengthWord){
            return value.substring(0, lengthWord).concat('...');
        }
        return value;
    },
    labelEmptyChecked(data, argOne = data, argTwo = '-'){
        return data ? argOne : argTwo
    },

    formatTime(time){
        if(dayjs(time).isValid()){
            // ********** example back display data 2024-08-04
            return dayjs(time).format("YYYY-MM-DD")
        }
        return '-' 
    },

    formatTimeFull(time){
        if(dayjs(time).isValid()){
            // ********** example back display data 2024-08-04 16:12
            return dayjs.utc(time).tz("Asia/Jakarta", true).format("YYYY-MM-DD HH:mm")
        }
        return '-' 
    },

    checkFormatEmail(text=''){
        if(text.length >0){
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(text)
        }
    }
}