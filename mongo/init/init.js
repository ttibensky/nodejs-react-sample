db.auth('root', 'wVKi6FaX')
db = db.getSiblingDB('projection')

db.createCollection('jobs', { capped: false });
db.jobs.insert([
    {
        _id: "2dd65d74-2c50-4a68-9b57-2489b13d47ec",
        customerName: "John Doe",
        type: "Plumbing",
        status: "Scheduled",
        appointmentDate: ISODate("2024-06-09T14:13:49.000Z"),
        technician: "Jane Smith",
        __v: 0
    },
    {
        _id: "c391c695-29ba-457a-b810-426701230bcf",
        customerName: "Alice Johnson",
        type: "Electrical",
        status: "Completed",
        appointmentDate: ISODate("2024-05-07T23:20:00.000Z"),
        technician: "Bob Brown",
        __v: 0
    }
]);
