function myBiodata(myName, myAge) {
    let obj = {
        Name: myName,
        Age: myAge,
        Address: 'Jl. Budi Mulia no.12 RT/RW 002/008, Pademangan Barat, Jakarta Utara',
        Hobbies: ['Reading boo', 'active on social media', 'travelling'],
        is_married: false,
        list_school: [{ name: 'SMK N 1 Lemahabang', year_in: 2012, year_out: 2015, major: 'Akuntansi' }, { name: 'SMP N 1 Susukan Lebak', year_in: 2009, year_out: 2012, major: null }, { name: 'SDN 1 Asem', year_in: 2003, year_out: 2009, major: null }],
        skills: [{ skill_name: 'Javascript', level: 'advanced' }, { skill_name: 'Python', level: 'beginner' }, { skill_name: 'PHP', level: 'beginner' }, { skill_name: 'Java', level: 'beginner' }, { skill_name: 'HTML/CSS/Bootstrap', level: 'advanced' }, { skill_name: 'Code Igniter', level: 'beginner' }],
        interest_in_coding: true
    }
    return obj
}
console.log(myBiodata('Vika Vitaloka Pramansah', 22));
