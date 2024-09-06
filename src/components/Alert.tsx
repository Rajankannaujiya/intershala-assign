interface AlertProps {
  textColor: string;
  bgColor: string;
  alertType: string;
  alertContent: string;
}

function Alert({ textColor, bgColor, alertType, alertContent }: AlertProps) {
  return (
    <div  className={`fixed top-4 right-4 p-4 mb-4 text-sm ${textColor} ${bgColor} rounded-lg shadow-lg transition-transform transform 'animate-fadeIn' : 'animate-fadeIn animate-delay-500`}
    role="alert">
      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 16a7 7 0 110-14 7 7 0 010 14zm0-12a1 1 0 011 1v4a1 1 0 01-2 0V6a1 1 0 011-1zm0 8a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
      <div>
        <span className="font-medium">{alertType}:</span> {alertContent}
      </div>
    </div>
  );
}

export default Alert;

