import { friends, colleagues } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f: Friend[]) : string [] {
    const result: string[] = f.map((f) => {
        f.age += 1
    return `${f.name} is now ${f.age}`;
    });
    return result;
}


console.log(allOlder(friends))


function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));



  function addColleague(colleagues: Colleague[], name: string, department: string, email: string): Colleague[] {

    const highest = highestExtension(colleagues)
  
    // Assign the new colleague the highest extension number plus one
    const newColleague: Colleague = {
      name,
      department,
      contact: {
        email,
        extension: highest.contact.extension + 1,
      },
    };
    const updatedColleagues = [...colleagues, newColleague];
  
    return updatedColleagues;
  }


  const updatedColleagues = addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(updatedColleagues);
