// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function login(req, res) {
  console.log(req)
  res.status(200).json(
      {
        username: 'Andrea',
        userType: 'trascinatore',
        takenToday: false,
        todayPartner: {}
      }
  )
}