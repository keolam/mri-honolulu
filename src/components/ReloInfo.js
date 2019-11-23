import React from 'react';
import Image from './../Data/imageDir';

const ReloInfo = () => (
    <div>
        <img src={ Image.relo } alt="shipping" style={{width: '100%'}}></img>
        <section className="main">
            <div id="title">
            <h1>Relocation Information</h1>
            </div>
            <p>If you're considering relocating or asking someone else to relocate, you probably have a lot of questions. MRINetwork's long-term partner, FAS Relocation Network, A Global Mobility Solutions Company, gives you a comprehensive menu of relocation services. From calculating potential expenses to choosing the right community, these tools can help with any move, whether local or cross-country.</p>
        </section>
        <blockquote> 
    <h3 class="smalltxt"><a href="http://www.homefair.com/homefair/servlet/ActionServlet?pid=199&amp;cid=MRICORP2" target="_blank">Salary 
      Calculator</a> - Find out how much you need to make in a new city to maintain 
      your current lifestyle.</h3>
    <h3 class="smalltxt"><a href="http://www.homefair.com/homefair/servlet/ActionServlet?pid=174&amp;cid=MRICORP2" target="_blank">Moving 
      Calculator</a> - Use the moving calculator to help budget for your upcoming 
      move.</h3>
    <h3 class="smalltxt"><a href="http://www.homefair.com/homefair/servlet/ActionServlet?pid=132&amp;cid=MRICORP2" target="_blank">Relocation 
      Crime Lab</a> - Use our Crime Lab to compare crime statistics in over 6,000 
      cities.</h3>
    <h3 class="smalltxt"><a href="http://www.homefair.com/homefair/servlet/ActionServlet?pid=219&amp;cid=MRICORP2" target="_blank">Relocation 
      Wizard</a> - Create a custom timeline to organize the many details of a 
      relocation.</h3>
    <h3 class="smalltxt"><a href="http://www.homefair.com/homefair/servlet/ActionServlet?pid=43&amp;cid=MRICORP2" target="_blank">Mortgage 
      Qualifier</a> - Calculate the housing and real estate you qualify for at 
      current mortgage rates.</h3>
    <h3 class="smalltxt"><a href="http://www.homefair.com/homefair/servlet/ActionServlet?pid=47&amp;cid=MRICORP2" target="_blank">Rent-Buy 
      Calculator</a> - Use this calculator to help determine the best solution 
      -- own or rent.</h3>
    <h3 class="smalltxt"><a href="http://www.homefair.com/homefair/servlet/ActionServlet?pid=10&amp;cid=MRICORP2" target="_blank">Community 
      Close-Up</a> - Use the Community Close-Up tool to compare community statistics. 
      This tool gives you the ability to assess community demographics, income, 
      housing facts, and educational data.</h3>
  </blockquote>
    </div>       
)

export default ReloInfo;