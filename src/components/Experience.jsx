import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { color, motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"


const ExperienceCard = ({experience, index}) => {
  
  let direction = index % 2 == 0 ? 'right': 'left'; 
  return (
<VerticalTimelineElement contentStyle={{background: '#1d1836' ,color:'#fff'}} contentArrowStyle={{borderRight: '7px solid #232631'}} date={experience.date} iconStyle={{background: experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/>
    </div>
  }
  >

    <motion.div   variants={fadeIn(direction, "spring", 0.40 *index, 0.74)} >
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </motion.div>
    <motion.ul variants={fadeIn(direction, "spring", 0.40 *index, 0.74)} className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point) => (<li key={point.index} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>))}
    </motion.ul>
  </VerticalTimelineElement>
)}
const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
            {experiences.map((experience, index) => 
                <ExperienceCard key={index} experience={experience} index = {index}/>
            )}
        </VerticalTimeline>
      </div>
      </>
  )
}

export default  SectionWrapper(Experience,'work')