import React from 'react';
import Image from './../Data/imageDir';
import { Link } from 'react-router-dom';
import '../componentCSS/CounterOffer.css';

const CounterOffer = () => (
  <div>
    <div>
      <div id="pic">
        <img src={Image.counter} alt="swimming" style={{ width: '100%' }}></img>
      </div>

      <h1 id="titletxt"> Considering the Counteroffer</h1>

      <p id="discalimer" > <i>The following article was published in
        the Wall Street Journal. National statistics show that of employees who accept
        counter-offers, 50-80% voluntarily leave their employer within 6 months of
        accepting the counter offer because of unkept promises. The majority of the
        balance of employees that accept counter offers involuntarily leave their
        current employers within 12 months of accepting the counter offer. (terminated,
              fired, laid off, etc). </i></p>
      <br />
      <p className="smalltxt"><b>Counteroffer Acceptance: Road to Career Ruin</b></p>

      <p id="dclaim"><i>(Reprinted from the Wall Street Journal and written by Paul Hawkinson.
            Paul has been in the recruiting business for more than 20 years) </i></p>

      <p className="smalltxt" >A Raise won't permanently cushion thorns in
        the nest. Mathew Henry, the 17th-century writer said, "Many a dangerous
        temptation comes to us in fine gay colours that are but skin deep." The
        same can be said for counteroffers, those magnetic enticements designed to
        lure you back into the nest after you've decided it's time to fly away. The
        litany of horror stories I have come across in my years as an executive recruiter,
              consultant and publisher, provides a litmus test that clearly indicates: </p>
      <br />
      <p className="smalltxt">Counteroffers should never be accepted....EVER!</p>
      <br />
      <br />
      <p className="smalltxt">I define a counteroffer simply as an inducement from your current employer
      to get you to stay after you've announced your intention to take another job.
      We're not talking about those instances when you receive an offer but don't
      tell your boss. Nor are we discussing offers that you never intended to take,
      yet tell your employer about anyway as a "they-want-me-but-I'm-staying-with-you"
      ploy. These are merely astute positioning tactics you may choose to use to
      reinforce your worth by letting your boss know you have other options. Mention
            of a true counteroffer, however, carries an actual threat to quit. </p>
      <br />
      <p className="smalltxt">Interviews with employers who make counteroffers, and employees, who accept
      them, have shown that as tempting as they may be, acceptance may cause career
      suicide. During the past 20 years, I have seen only isolated incidents in
      which an accepted counteroffer has benefited the employee. Consider the problem
            in its proper perspective.</p><br />
      <br />
      <p className="smalltxt">What really goes through a boss's mind when someone quits? </p>

      <p className="smalltxt"><i>"This couldn't be happening at a worse time."
              <br />
        "This is one of my best people. If I let him quit now, it'll wreak
              havoc on the morale of the department." <br />
        "I've already got one opening in my department, I don't need another
              right now." <br />
        "This will probably screw up the entire vacation schedule." <br />
        "I'm working as hard as I can, and I don't need to do his work, too."
              <br />
        "My review is coming up and this will make me look bad." <br />
        "Maybe I can keep him on until I find a suitable replacement." </i> </p>

      <p className="smalltxt">What will the boss say to keep you in the nest? Some of these comments are common.</p>
      <div>
        <p className="smalltxt"><i>"I'm really shocked. I thought you were as happy
          with us as we are with you. Let's discuss it before you make your final
                    decision." <br />
          "Aw, gee, I've been meaning to tell you about the great plans we have
                    for you, but it's been confidential until now." <br />
          "The directors/executives has you in mind for some exciting and expanding
                    responsibilities." <br />
          "Your raise was scheduled to go into effect next few months, but we'll
                    make it effective immediately." <br />
          "You're going to work for who?" </i></p>
      </div>
      <p className="smalltxt">Let's face it. When someone quits, it's a direct reflection
      on the boss. Unless you're really incompetent or a destructive thorn in his
      side, the boss might look bad by "allowing" you to go. His gut reaction
      is to do what has to be done to keep you from leaving until he's ready. That's
              human nature.</p>
      <p className="smalltxt">Unfortunately, it's also human nature to want to stay unless
       your work life is abject misery. Career changes, like all ventures into the
       unknown, are tough. That's why bosses know they can usually keep you around
               by pressing the right buttons. <br />
        Before you succumb to a tempting counteroffer, consider these universal truths:
        Any situation in which an employee is forced to get an outside offer before
        the present employer will suggest a raise, promotion or better working conditions,
               is suspect. <br />
        <br />
        No matter what the company says when making its counteroffer, you will always
        be considered a risk. Having once demonstrated your lack of loyalty (for whatever
        reason), you will lose your status as a "team player" and your place
            in the inner circle. <br />
        Counteroffers are usually nothing more than stall devices to give your employer
            time to replace you. <br />
        Your reasons for wanting to leave still exist. Conditions are just made a
        bit more tolerable in the short term because of the raise, promotion or promises
            made to keep you. <br />
        <br />
        Counteroffers are only made in response to a threat to quit. Will you have
        to bring in an offer and threaten to quit every time you deserve better working
        conditions? Decent and well-managed companies don't make counteroffers --
            EVER! <br />
        Their policies are fair and equitable. They will not be subjected to "counteroffer
            intimidation" or what they perceive as blackmail. <br />
        <br />
        If the urge to accept a counteroffer hits you, keep on cleaning out your desk
        as you count your blessings.
          </p>
    </div>

    <div className="back-to">
      <Link to='/CandidateResources' className="can-rec">
        Back to Candidate Resources
            </Link>
    </div>
  </div>
)

export default CounterOffer;