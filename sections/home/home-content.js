// Frequently edited home-page content lives here for easier maintenance.

// Copy one of these templates, update values, then paste into HOME_NEWS_ARTICLES.
// Keep newest articles at the top of HOME_NEWS_ARTICLES.
export const ARTICLE_TEMPLATE_WITH_PHOTO = `
      <article class="news-article">
        <div class="news-photo-placeholder">
          <img
            class="news-photo-image"
            src="sections/home/images/your-image-file.jpg"
            alt="Short image description"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="photo-box" style="display:none;">Article Photo Placeholder</div>
        </div>
        <div class="news-body">
          <h3>Your Article Title</h3>
          <p class="news-meta">Month Day, Year &nbsp;|&nbsp; Category</p>
          <p>Your first paragraph goes here.</p>
          <p>Your second paragraph goes here.</p>
          <p class="news-sig">Author Name, Role</p>
        </div>
      </article>
`;

export const ARTICLE_TEMPLATE_NO_PHOTO = `
      <article class="news-article news-article--no-photo">
        <div class="news-body">
          <h3>Your Article Title</h3>
          <p class="news-meta">Month Day, Year &nbsp;|&nbsp; Category</p>
          <p>Your first paragraph goes here.</p>
          <p>Your second paragraph goes here.</p>
          <p class="news-sig">Author Name, Role</p>
        </div>
      </article>
`;

//Only update HOME_NEWS_ARTICLES below. Do not edit the templates above or the renderHomeContent function. You will see below content in acutal home page. For any changes to the structure of the home page, please edit the renderHomeContent function below.
export const HOME_NEWS_ARTICLES = [
  `
      <article class="news-article">
        <div class="news-photo-placeholder">
          <img
            class="news-photo-image"
            src="sections/home/images/PM_SK.jpeg"
            alt="Sincere Gratitude article"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="photo-box" style="display:none;">Article Photo Placeholder</div>
        </div>
        <div class="news-body">
          <h3>Sincere Gratitude to Prime Minister of Nepal</h3>
          <p class="news-meta">March 7th, 2026 &nbsp;|&nbsp; Local News, NASeA Bulletin</p>
          <p>
            The Nepalese Association in Southeast America (NASeA) extends its sincere gratitude to
            the Prime Minister of Nepal, Rt. Honorable Sushila Karki, for the leadership demonstrated
            by her interim government in successfully conducting the recent national election. NASeA
            recognizes the significance of this achievement and acknowledges the efforts made to
            ensure a fair, transparent, and peaceful electoral process.
          </p>
          <p>
            As a community organization representing Nepalis globally, NASeA values democratic
            participation and the stability that credible elections bring to Nepal's governance and
            future. The successful completion of this election reflects the dedication of institutions,
            officials, and citizens who contributed to this important national milestone.
          </p>
          <p>
            NASeA also expresses appreciation to all individuals and organizations who supported the
            electoral process and helped uphold democratic principles during this transitional period.
            The association remains committed to fostering unity, cultural preservation, and civic
            engagement within the Nepali diaspora.
          </p>
          <p class="news-sig">
            Bidya Gurung, President, NASeA &mdash;
            <a href="mailto:bidyagurung@aol.com">bidyagurung@aol.com</a>
          </p>
        </div>
      </article>
  `,
  `
      <article class="news-article news-article--no-photo">
        <div class="news-body">
          <h3>Urgent Advisory to All Nepali Citizens Residing and Working Across the Middle East</h3>
          <p class="news-meta">March 4th, 2026 &nbsp;|&nbsp; Uncategorized</p>
          <p>
            As President of the Nepalese Association in Southeast America (NASeA), I extend this
            urgent advisory to all Nepali citizens residing and working across the Middle East.
            Recent regional tensions and unpredictable developments have raised serious concerns for
            the wellbeing of migrant workers, students, and families. NASeA stands in solidarity with
            our global Nepali community and urges everyone to remain alert, informed, and prepared.
          </p>
          <h4>Priority Safety Measures</h4>
          <ul>
            <li>Stay informed through verified updates from local authorities, Nepali embassies, and trusted news organizations.</li>
            <li>Follow local laws and employer directives to ensure compliance with safety protocols and security advisories.</li>
            <li>Avoid unnecessary travel, especially to areas experiencing unrest, demonstrations, or restricted movement.</li>
            <li>Secure essential documents, including passports, work permits, and identification, and keep digital copies stored safely.</li>
            <li>Maintain communication with family members in Nepal and abroad to keep them updated on your safety and location.</li>
            <li>Register with the nearest Nepali Embassy to ensure you can be reached quickly in emergencies.</li>
            <li>Report unsafe conditions to your embassy, consulate, or local authorities without hesitation.</li>
          </ul>
          <p>
            NASeA remains committed to the safety, dignity, and wellbeing of Nepali citizens worldwide.
            We urge all individuals in the region to act with caution and prioritize personal safety
            during this period of uncertainty.
          </p>
          <p class="news-sig">Bidya Gurung, President, NASeA</p>
        </div>
      </article>
  `,
  `
      <article class="news-article">
        <div class="news-photo-placeholder">
          <img
            class="news-photo-image"
            src="sections/home/images/Press release.jpg"
            alt="Embassy Press Release article"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="photo-box" style="display:none;">Article Photo Placeholder</div>
        </div>
        <div class="news-body">
          <h3>Press Release From Embassy of Nepal &ndash; US</h3>
          <p class="news-meta">February 11th, 2026 &nbsp;|&nbsp; Local News, NASeA Bulletin</p>
          <p>
            The Embassy of Nepal has recently released an updated contact list for various consular
            services. Recognizing its importance, NASeA has already circulated this information
            through email and posted it on our official Facebook page.
          </p>
          <p>We encourage all community members to use this resource for their consular needs.</p>
          <p class="news-sig">Bidya Gurung, President, NASeA</p>
          <hr class="news-divider">
          <p><strong>विषय: दूतावासको सम्पर्क सूची (कन्सुलर सेवाहरूका लागि)</strong></p>
          <p>नमस्कार,</p>
          <p>
            नेपाल दूतावासले हालसालै विभिन्न कन्सुलर सेवाहरूका लागि अद्यावधिक सम्पर्क सूची सार्वजनिक
            गरेको छ। यसको महत्वलाई ध्यानमा राख्दै NASeA ले यसलाई शीघ्र इमेलमार्फत वितरण गर्नेछ र
            आधिकारिक वेबसाइटमा प्रकाशित गर्नेछ।
          </p>
          <p>हामी सबै समुदाय सदस्यहरूलाई आफ्ना कन्सुलर आवश्यकताहरूका लागि यस स्रोतको उपयोग गर्न प्रोत्साहित गर्दछौं।</p>
          <p class="news-sig">विद्या गुरुङ, अध्यक्ष, NASeA</p>
        </div>
      </article>
  `,
  `
      <article class="news-article">
        <div class="news-photo-placeholder">
          <img
            class="news-photo-image"
            src="sections/home/images/Officer Tamang.jpg"
            alt="In Memory article"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="photo-box" style="display:none;">Article Photo Placeholder</div>
        </div>
        <div class="news-body">
          <h3>In Memory of Officer Pradeep Tamang</h3>
          <p class="news-meta">February 3rd, 2026 &nbsp;|&nbsp; Local News, NASeA Bulletin</p>
          <p>Dear Community Members,<br>Namaste,</p>
          <p>
            It is with profound sorrow that we share the tragic loss of Officer Pradeep Tamang, a
            dedicated public servant, who was shot and killed in the line of duty at just 25 years of age.
          </p>
          <p>The ceremonial service and cremation will be held on Saturday, February 7, 2026, as follows:</p>
          <h4>Ceremonial Service</h4>
          <p>
            12Stone Church<br>
            2565 Buford Hwy NE, Buford, GA 30518<br>
            Time: 10:00 AM
          </p>
          <h4>Cremation Service</h4>
          <p>
            Tim Stewart Funeral Home<br>
            300 Simonton Road SW, Lawrenceville, GA 30046<br>
            Time: 1:00 PM
          </p>
          <p>
            We humbly request the presence of community members as we honor Officer Tamang's life,
            service, and sacrifice.
          </p>
          <p class="news-sig">Nepalese Association in Southeast America (NASeA) Family</p>
        </div>
      </article>
  `,
];
