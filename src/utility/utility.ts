import Swal from 'sweetalert2';

export function formatDate(date: Date): string {
  const day = date.getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  let daySuffix;
  if (day > 3 && day < 21) daySuffix = 'th';
  else
    switch (day % 10) {
      case 1:
        daySuffix = 'st';
        break;
      case 2:
        daySuffix = 'nd';
        break;
      case 3:
        daySuffix = 'rd';
        break;
      default:
        daySuffix = 'th';
        break;
    }

  return `${day}${daySuffix} ${month}, ${year}`;
}

export function formatTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();

  return `${hours}:${minutesStr} ${ampm}`;
}

export function getTodayDate() {
  const year = new Date().getFullYear();
  let month = new Date().getMonth();
  let date = new Date().getDate();

  let finalMonth =
    month.toString().length == 1 ? '0' + (~~month + 1) : month.toString();

  let finalDate = date.toString().length == 1 ? '0' + date : date.toString();

  return `${year}-${finalMonth}-${finalDate}`;
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export function sideAlertMessage(type: string, title: string) {
  if (type == 'success' || type == 'error') {
    Toast.fire({
      icon: type,
      title: title,
    });
  }
}
