import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/InterviewGuide.css';

const InterviewGuide = () => (

    <div>
        <img src={ Image.interviewGuide } id="pic" alt="workspace" style={{width: '100%'}}></img>
        <h1>Interviewing Guide</h1>
        <p className="smalltxt"> Our service to you as an employer is to help you make the best decisions possible in hiring the right talent to add to your team. The interview is the most critical stage of this process, and we offer you here a guide for interviewing candidates developed from years of experience in the recruitment industry by MRINetwork recruiters. Just keep in mind that since each individual – and each interview – is different, these points should serve only as basic guidelines, not as inflexible rules.</p>
        <h3>Meeting the Candidate</h3>
        <div className="smalltxt">
            <p>At the outset, act friendly but avoid prolonged small talk – interviewing time costs money.</p>

            <p>a. Introduce yourself by using your name and title.</p>
            <p>b. Mention casually that you will take notes ("You don’t mind if I take notes, do you?")</p>
            <p>c. Assure candidate that all information will be treated confidentially.</p>

            <h3>Questions</h3>

            <p>a. Ask clear concise questions in a conversational tone.</p>
            <p>b. Ask open-ended questions which will force complete answers. "Why do you say that?"</p>
            <p>c. Don’t ask direct questions that can be answered "yes" or "no."</p>

            <h3>The Interview</h3>

            <p>Prepare for the interview the day before you appointment. Develop a list of questions that you will ask each candidate. If you ask the same questions of each individual, you will be able to make a better comparison. As you interview a candidate, keep in mind that your objective is to determine what the candidate is really saying about him/herself, and to determine if he/she is the right person for the job. When the candidate answers your questions, ask for an example of past behavior that illustrates his/her answer. Remember you should never ask questions about race religion, age, ethic background, sexual preferences, and martial status or health issues.</p>

            <h3>Analyzing</h3>

            <p>a. Attempt to determine the candidate’s goals.</p>
            <p>b. Try to draw the candidate out and allow him/her to talk.</p>
            <p>c. Don’t sell – interview.</p>
            <p>d. Try to avoid snap judgments.</p>

            <h3>The following are questions that may help you in the interview process.</h3>

            <h2>I. ATTITUDE</h2>

            <h3>If you want to know:</h3>

            <p>1) Can the candidate compete without irritation?</p>
            <p>2) Can he/she balance interest of both company and personal interest?</p>
            <p>3) What are his/her life priorities?</p>
            <p>4) Is this person loyal?</p>
            <p>5) Does he/she take pride in doing a good job?</p>
            <p>6) Indications of being cooperative-a team player?</p>

            <h3>Then ask the Candidate:</h3>

            <p>1) Have you ever lost in competition? What were your feelings?</p>
            <p>2) How can the American way of business be improved?</p>
            <p>3) Do you feel you’ve made a success of life to date? How?</p>
            <p>4) Who was your best boss? Describe the person.</p>
            <p>5) What duties did you like most in your last job? Least?</p>
            <p>6) What has your experience been in working with others?</p>

            <h2>II. MOTIVATION</h2>

            <h3>If you want to know:</h3>
            <p>1) Is he/she settled in choice of work?</p>
            <p>2) Does he/she work from choice or necessity?</p>
            <p>3) Does he/she make day-to-day and long range plans?</p>
            <p>4) Does he/she use some leisure self-improvement?</p>
            <p>5) Is the candidate willing to work for what he/she wants in face of position?</p>

            <h3>Then ask the Candidate:</h3>

            <p>1) What ambitions do you have for yourself?</p>
            <p>2) What mortgages, debts, etc., press you now?</p>
            <p>3) What have you done on your own to prepare for a better job?</p>
            <p>4) How will this job help you to get what you want?</p>
            <p>5) What obstacles are most likely to trip you up? III. INITIATIVE</p>

            <h3>If you want to know:</h3>

            <p>1) Is he/she a self-starter?</p>
            <p>2) Does he/she complete own tasks?</p>
            <p>3) Does he/she follow through on assigned tasks?</p>
            <p>4) Does the job fit his/her long term goals?</p>
            <p>5) Can he/she work independently?</p>

            <h3>Then ask the Candidate:</h3>
            <p>1) What things get you excited in doing your job? What things distract you?…disturb you most?</p>
            <p>2) How do you follow up after have an assignment?</p>
            <p>3) Tell me about missing a deadline. What if you do?</p>
            <p>4) What do you like and dislike about you kind of work?</p>
            <p>5) Which supervisors have let you work alone? How did you feel about this?</p>

            <h2>IV. STABILITY</h2>

            <h3>If you want to know:</h3>
            <p>1) Is this person excitable or even tempered?</p>
            <p>2) Is he/she impatient or understanding?</p>
            <p>3) Does he/she show likes and dislikes freely?</p>
            <p>4) Does he/she use words that show strong feelings?</p>
            <p>5) Will he/she broaden or flatten under pressure?</p>
            <p>6) Is he/she enthusiastic about the job?</p>

            <h3>Then ask the Candidate:</h3>
            <p>1) What things disturb you most?</p>
            <p>2) How do you get along with people you dislike or don’t respect?</p>
            <p>3) What individual actions irritate you?</p>
            <p>4) What were your most unpleasant work experiences? Life experiences? How did you meet the challenges they posed?</p>
            <p>5) What are your most pleasant work experiences? Tell me about them.</p>
            <p>6) How do you handle job pressures? Explain. V. PLANNING</p>

            <h3>If you want to know:</h3>
            <p>1) Ability to plan and follow through? Or will he/she depend on a supervisor for planning?</p>
            <p>2) Ability for he/she to coordinate work of others?</p>
            <p>3) Ability for he/she to fit into company methods?</p>
            <p>4) His/her ability to think outside the box?</p>
            <p>5) Will he/she complete the whole job or get caught up in detail?</p>

            <h3>Then ask the Candidate:</h3>
            <p>1) How do you plan a day’s work?</p>
            <p>2) How do you set priorities for others?</p>
            <p>3) Give me an idea of how you spend a typical day.</p>
            <p>4) What work improvements have you instigated in other jobs</p>?
            <p>5) If you were the managers how would you run your present job? What are the differences between planned and unplanned work?</p>

            <h2>VI. INSIGHT</h2>

            <h3>If you want to know:</h3>
            <p>1) Is he/she realistic in appraising self?</p>
            <p>2) Is his/her desire for self-improvement?</p>
            <p>3) Is he/she interested in problems of others?</p>
            <p>4) Is he/she interested in reactions of others to self?</p>
            <p>5) Will he/she take constructive action when criticized?</p>

            <h3>Then ask the Candidate:</h3>
            <p>1) Tell me about your strengths. Weaknesses.</p>
            <p>2) Are your weaknesses important enough to do something about them? Why or why not?</p>
            <p>3) How would you size up your last employer? How would he/she size you up?</p>
            <p>4) Most useful criticism received? From whom? Tell me about it. Most useless?</p>
            <p>5) How do you handle people who criticize you?</p>

            <h2>VII. SOCIAL SKILLS</h2>

            <p>If you want to know:</p>
            <p>1) Is he/she a leader or follower?</p>
            <p>2) Is he/she interested in new ways of dealing with people?</p>
            <p>3) Can he/she get along best with what types of people?</p>
            <p>4) Will he/she wear well over the long term?</p>
            <p>5) Can he/she make friends easily?</p>

            <h3>Then ask the Candidate: </h3>
            <p>1) What do you like to do in your spare time?</p>
            <p>2) Have you ever organized a group? Tell me about it.</p>
            <p>3) What methods are effective in dealing with people? What methods are ineffective?</p>
            <p>4) What kind of people do you get along with best?</p>
            <p>5) Do you prefer making new friends or keeping old ones? Why? How do you go about making friends? What must a person do to be liked by other?</p>
            </div>
</div>
)

export default InterviewGuide;