import {useState} from "react"

const GroupedTeamMembers = ({employees,selectedTeam,setTeam})=>{
  const [groupedEmployees,setGroupedData] = useState(groupTeamMembers)
  function groupTeamMembers() {
    var teams=[]
    
    var teamAMembers = employees.filter((el)=>el.teamName === 'TeamA')
    var TeamA = {team:'TeamA',members:teamAMembers, collapsed:selectedTeam === 'TeamA'?false:true}
    teams.push(TeamA)
    
    var teamBMembers = employees.filter((el)=>el.teamName === 'TeamB')
    var TeamB = {team:'TeamB', members:teamBMembers, collapsed:selectedTeam === 'TeamB'?false:true}
    teams.push(TeamB)
    
    var teamCMembers = employees.filter((el)=>el.teamName === 'TeamC')
    var TeamC = {team:'TeamC', members:teamCMembers, collapsed:selectedTeam === 'TeamC'?false:true}
    teams.push(TeamC)
    
    var teamDMembers = employees.filter((el)=>el.teamName === 'TeamD')
    var TeamD = {team:'TeamD', members:teamDMembers, collapsed:selectedTeam === 'TeamD'?false:true}
    teams.push(TeamD)
    console.log(teams)
    return teams
    
  }
  function handleTeamClick(event){
    var transferGroupData = groupedEmployees.map((groupData)=>groupData.team===event.currentTarget.id?{...groupData,collapsed: !groupData.collapsed}:groupData)
    setGroupedData(transferGroupData)
    setTeam(event.currentTarget.id)
  }
  return (
    <main className='container'>
      
      {
        groupedEmployees.map((item)=>{
          return (
            <div key={item.team} className="card mt-2" style={{cursor:'pointer'}}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={'collaspe_'+item.team} className={item.collapsed===true?'collapse':''}>
                <hr />
                {
                  item.members.map((el)=>{
                    return(
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className='text-dark'>Full Name: {el.fullName}</span>
                        </h5>
                        <p>Designation: {el.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}
export default GroupedTeamMembers