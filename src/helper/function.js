export function judulConvertToUrlParameter (string) {
  var result = '';
  for (var i=0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += '-'
    } else if (string[i] === ',' || string[i] === '!' || string[i] === '(' || string[i] === ')') {
      result += ''
    } else {
      result += string[i]
    }
  }
  return result.toLowerCase()
}

export function dateFormatCleanAdmin (string) {
  const date = string.split('T')
  const splitDate = date[0].split('-')
  const newFormatDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
  return newFormatDate
}

export function dateFormatClean (string) {
    const date = string.split('T')
    const splitDate = date[0].split('-')
    const newFormatDate = `${splitDate[2]} ${convertMonth(splitDate[1])} ${splitDate[0]}`
    return newFormatDate + ' - ' + date[1].split('.')[0]
  }

//======================================================================
//======================================================================
//======================================================================

export default function convertMonth (string) {
  switch (string) {
    case '01':
      return 'Januari'
    case '02':
      return 'Februari'
    case '03':
      return 'Maret'
    case '04':
      return 'April'
    case '05':
      return 'Mei'
    case '06':
      return 'Juni'
    case '07':
      return 'Juli'
    case '08':
      return 'Agustus'
    case '09':
      return 'September'
    case '10':
     return 'Oktober'
    case '11':
      return 'November'
    case '12':
      return 'Desember'
    default:
      return ''
  }
}