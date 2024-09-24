const technology = [
    { id: 1, name: "HTML & CSS", rating: 12/12 },
    { id: 2, name: "Tailwind CSS", rating: 10/12 },
    { id: 3, name: "Javascript", rating: 11/12 },
    { id: 4, name: "React JS", rating: 11/12 },
    { id: 5, name: "UI|UX", rating: 10/12 },
    { id: 6, name: "figma", rating: 8/12 },
    { id: 7, name: "Node JS", rating: 8/12 },
    { id: 8, name: "Express JS", rating: 8/12 },
    { id: 9, name: "MySQL", rating: 8/12 },
    { id: 10, name: "MongoDB", rating: 8/12 },
]


const Skills = () => {
    return (

    <>
        <div className="mt-12 lg:mb-32 text-white" id="skills">
            <div className="container m-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">skills</h2>
                {technology.map((item) =>(
                    <div key={(item.id)} className="mt-14">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                        </div>
                        <div className="w-full h-4 bg-slate-600 block rounded-md" style={{ width: `${item.rating * 100}%` }}></div>
                    </div>
                ))}
                
            </div>

        </div>
      </>
    );
  }
  
  export default Skills;
  