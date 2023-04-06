import React from 'react'
import styled from 'styled-components';
import profileimg2 from './images/profile2-img.jpg';


const About = () => {
  return (
    <Wrapper>
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-title">
          <h2>About <span className='about-me-color'>Me</span></h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="about-flex">
          <div className="about-image">
            <img src={profileimg2} class="img-fluid" alt={profileimg2} />
          </div>
          <div className="about-left">
            <h3>Web <span className='about-me-color'>Developer.</span></h3>
            <p className="about-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="about-content">
              <div className="about-info">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                </ul>
              </div>
              <div className="about-info">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                </ul>
              </div>
            </div>
            <p className='about-paragraph'>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>      
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
.about{
  width: 100%;
  padding-top: 40px;
  padding-right: 10px;
padding-bottom: 20px;
  background-color: var(--sectionbackground);
}
.about-me-color{
  color: var(--herospan);
}
.about-flex{
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.img-fluid{
  width: 356px;
}
.about-left{
  width: 100%;
  display: flex;
  flex-direction: column; 
  gap: 20px;
}
.about h3 {
  font-weight: 700;
  font-size: 26px;
  color: var(--herocolor);
}
.about-content{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.about ul {
  list-style: none;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about-info{
  width: 100%;
}
.about ul li {
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  color: var(--text);
}

.about ul strong {
  margin-right: 10px;
  font-family: "Open Sans", sans-serif;
  color: var(--text);
}

.about ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #0563bb;
  line-height: 0;
}
.about-paragraph{
  color: var(--text);
}
.about p:last-child {
  margin-bottom: 0;
  line-height: 20px;
}



@media screen and (max-width: 992px) {

  .about{
    padding: 30px 10px;
  }
  .about-flex{
    flex-direction: column;
  }
  .about-content{
    flex-direction: column;
    gap: 20px;
  }
  .img-fluid{
    width: 100%;
  }

}

`

export default About;

