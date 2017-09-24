import moment from 'moment';

export const validDate = (strDate) => {
  return moment(strDate,'DD/MM/YYYY', true).isValid();  
}