import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIcon, SocialIconLink } from './Footer.elements';


const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membership to receive the latest news and trends on our products and services.
            </FooterSubHeading>
            <FooterSubText>
              You can subscribe at any time
            </FooterSubText>
            <Form>
               <FormInput name="email" type="email" placeholder="Your Email" />
                 <Button fontBig>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
           <FooterLinksWrapper>
             <FooterLinksItems>
               <FooterLinkTitle>
                  About Us
               </FooterLinkTitle>
               <FooterLink to='/sign-up'>How it works</FooterLink>
               <FooterLink to=''>Testimonials</FooterLink>
               <FooterLink to=''>Careers</FooterLink>
               <FooterLink to=''>Investors</FooterLink>
               <FooterLink to=''>Terms of Service</FooterLink>
             </FooterLinksItems>

             <FooterLinksItems>
               <FooterLinkTitle>
                  About Us
               </FooterLinkTitle>
               <FooterLink to='/sign-up'>Contact Us</FooterLink>
               <FooterLink to=''>Testimonials</FooterLink>
               <FooterLink to=''>Careers</FooterLink>
               <FooterLink to=''>Investors</FooterLink>
               <FooterLink to=''>Terms of Service</FooterLink>
             </FooterLinksItems> 
               
             <FooterLinksItems>
               <FooterLinkTitle>
                  About Us
               </FooterLinkTitle>
               <FooterLink to='/sign-up'>Videos</FooterLink>
               <FooterLink to=''>Testimonials</FooterLink>
               <FooterLink to=''>Careers</FooterLink>
               <FooterLink to=''>Investors</FooterLink>
               <FooterLink to=''>Terms of Service</FooterLink>
             </FooterLinksItems>

             <FooterLinksItems>
               <FooterLinkTitle>
                  About Us
               </FooterLinkTitle>
               <FooterLink to='/sign-up'>Social Media</FooterLink>
               <FooterLink to=''>Testimonials</FooterLink>
               <FooterLink to=''>Careers</FooterLink>
               <FooterLink to=''>Investors</FooterLink>
               <FooterLink to=''>Terms of Service</FooterLink>
             </FooterLinksItems> 

            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
             <SocialLogo to='/'>
               <SocialIcon>
                 HAUS
               </SocialIcon>
               <WebsiteRights>
                HAUS © 2022
               </WebsiteRights>
               <SocialIcons>
                 <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                    <FaFacebook/>
                 </SocialIconLink>
                 <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                 </SocialIconLink>
                 <SocialIconLink href='/' target="_blank" aria-label="Youtube" rel="#">
                    <FaYoutube/>
                 </SocialIconLink>
                 <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                    <FaLinkedin/>
                 </SocialIconLink>
                 <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                    <FaTwitter/>
                 </SocialIconLink>
               </SocialIcons>
             </SocialLogo>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;