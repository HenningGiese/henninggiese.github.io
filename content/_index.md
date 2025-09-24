---
# Leave the homepage title empty to use the site title
title: ""
type: landing

design:
  spacing: "3rem"

sections:
  # === HERO (left: avatar/name + icons; right: bio + News) ===
  - block: resume-biography-3
    content:
      username: admin

      # ICON ROW (left column) — uses Font Awesome/Academicons
      links:
        - icon: file-lines     # CV
          icon_pack: fas
          name: CV
          url: "/uploads/cv.pdf"
        - icon: envelope       # Email
          icon_pack: fas
          url: "mailto:henning.giese@uni-paderborn.de"
        - icon: google-scholar
          icon_pack: ai
          url: "https://scholar.google.com/citations?user=bkwZVF4AAAAJ&hl=en"
        - icon: ssrn
          icon_pack: ai
          url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2850729"
        - icon: orcid
          icon_pack: ai
          url: "https://orcid.org/0000-0001-6878-5826"
        - icon: github
          icon_pack: fab
          url: "https://github.com/henninggiese"
        - icon: linkedin
          icon_pack: fab
          url: "https://www.linkedin.com/in/dr-henning-giese-53b311103/?originalSubdomain=de"

      # RIGHT column (bio + News)
      text: |-
        Henning Giese is a postdoctoral researcher at Paderborn University (Germany). His research focuses on multidimensional aspects of taxation with an emphasis on tax departments, tax complexity, and the effects of fiscal policy. One strand of his work examines factors that influence the design and performance of tax departments. A second strand investigates determinants and consequences of tax complexity. Several of his studies explore how tax policy shapes firm-level outcomes, such as tax compliance and risk-taking, and initiatives that advance the green transition.

        ### News
        - I’m co-organizing the 7th Doctoral Tax Brownbag (find information on the [previous edition here](https://sites.google.com/view/svea-holtmann/virtual-doctoral-tax-seminar)). A call for papers will follow soon.
        - I’m presenting *Real Effects of Earnings Stripping Rules* at the University of Illinois Symposium on Tax Research XIX on September 12.
        - I recently published an opinion piece on the new German tax law jointly with Svea Holtmann, Reinald Koch, and Dominika Langenmayr in [ifo Schnelldienst](https://www.ifo.de/publikationen/2025/zeitschrift-einzelheft/ifo-schnelldienst-082025-steuerliches-sofortprogramm-fuer-investitionen).
    design:
      avatar:
        size: medium
        shape: circle
      css_style: "background:#ffffff; color:#0b3b75;"

  # === INTERESTS & EDUCATION (two columns) ===
  - block: features
    content:
      title: ""
      items:
        - name: "Interests"
          description: |-
            - Corporate Taxation
            - Tax Departments & Complexity
            - Tax Complexity
            - Real Effects of Tax Policy
        - name: "Education"
          description: |-
            **Ph.D. (Dr. rer. pol.)**, Catholic University of Eichstätt–Ingolstadt, 2017–2021  
            *Dissertation:* The Effect of Management Structure and Manager Liability on Tax Avoidance

            **M.Sc. Business Administration**, Catholic University of Eichstätt–Ingolstadt, 2014–2016  
            Study abroad: Loyola Institute of Business Administration (Chennai, India), Sep–Dec 2015

            **B.Sc. Business & Management Studies**, University of Applied Sciences Europe, 2011–2014  
            Study abroad: Vancouver Island University (Nanaimo, Canada), Jan–Mar 2013
    design:
      columns: 2
      css_style: "color:#0b3b75;"
---
