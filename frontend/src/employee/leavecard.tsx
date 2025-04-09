// type LeaveProps = {
//     employeeName: string;
//     employeeEmail: string;
//     reason: string;
//     startDate: string;
//     endDate: string;
//     status: string;
//   };
  
//   const LeaveCard: React.FC<LeaveProps> = ({ employeeName, employeeEmail, reason, startDate, endDate, status }) => {
//     return (
//       <div className="p-4 bg-white shadow-md rounded-md">
//         <h3 className="text-lg font-semibold">{employeeName}</h3>
//         <p className="text-sm text-gray-500">{employeeEmail}</p>
//         <p><strong>Reason:</strong> {reason}</p>
//         <p><strong>Duration:</strong> {startDate} - {endDate}</p>
//         <p className={`font-bold ${status === "Pending" ? "text-yellow-500" : status === "Accepted" ? "text-green-500" : "text-red-500"}`}>
//           {status}
//         </p>
//       </div>
//     );
//   };
  
//   export default LeaveCard;
  