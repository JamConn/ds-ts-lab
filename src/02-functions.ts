import { friends, colleagues } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

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


function highestExtension(cs: Colleague[]) { // Inferred retun type
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


  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

  function findFriends(
    friends: Friend[],
    criterion: (friend: Friend) => boolean,
    sorter?: (f1: Friend, f2: Friend) => number
  ): Friend[] {
    const filteredFriends = friends.filter(criterion);
  
    if (sorter) {
      return filteredFriends.sort(sorter);
    }
  
    return filteredFriends;
  }
  


console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
