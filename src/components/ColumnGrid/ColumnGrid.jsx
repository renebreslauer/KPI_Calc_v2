import React from 'react'
import './ColumnGrid.scss'
import { Column, AboutColumn } from '../index'

function ColumnGrid() {
      let retention = [
          {
        header: 'Visitor Return Rate',
        definition: 'Simply put, your RVR is how many repeat visitors you have',
        indicator: 'It indicates if your content is engaging enough. Do customers want to buy more of your products? Returning visitors helps you figure out your strategy across verticals.',
        benchmark: "<25% is ideal. If you're over 40%, you'r ekilling it",
        moreInfo: 'RVR is definitely one of those hidden KPIs that a ton of marketers like to ignore. But, honestly, RVR can give you a good look at how your overall content strategy is going. Return customers are 5x more valuable than new ones, so a high RVR % is huge.'
      },
    {
  header: 'Bounce Rate',
  definition: 'Google defines bounce rate as "a single page session on your site". Bounce rate is a measurement of how many people are viewing one “page” (landing page, site, blog content, etc.) and then leaving.',
  indicator: "Stopping conversion loss. Also, bounce rate can give you some key insights into how you're layering your site content. If your prospects are leaving after one page, you need to figure out why.",
  benchmark: 'Depends on the content type.',
  moreInfo: "Having a high bounce rate doesn’t have to be a bad thing; it depends on where it’s happening. Landing pages, forms, and pillar content (or any other one-stop-shop) are going to have high bounce rates. But, if your eCommerce site has a high bounce rate, you need to take some action. Why are your customers ditching your funnel mid-dance?"
},
{
header: 'Customer Churn Rate',
definition: 'Your churn rate is the percentage of your customers who cancel (or fail to renew) their subscription with your service.',
indicator: "SaaS (or other sub-based) businesses looking to make a profit. If customers are canceling their sub before they hit your typical customer acquisition cost (CAC,) you’ve got a big problem.",
benchmark: '1-7% monthly',
moreInfo: "Churn rate is the perfect spot to start digging around. You need to figure out why customers are leaving. To do this, you can start sending out surveys, looking into customer particulars, analyzing your products, and reviewing competitors in your space. Churn rate can also give you some critical insights into overall market trends."
},
{
    header: 'Net Promoter Score',
    definition: 'Addressing customer concerns, quick-fixing client relationships, finding weak team members, discovering marketing-service gaps.',
    indicator: "SaaS (or other sub-based) businesses looking to make a profit. If customers are canceling their sub before they hit your typical customer acquisition cost (CAC,) you’ve got a big problem.",
    benchmark: "Since NPS involves a survey, you probably won't be self-calculating NPS",
    moreInfo: "NPS is massive in B2B client interactions. If you can figure out where you’re both not aligning early (first 30 days) you can quickly save the relationships. Don’t just send an NPS survey out at the end of your client relationships, use it as a way to touch base throughout. NPS can be used as a retention hack that can save you some valuable customers. Want to get started? There are plenty of “free trial” NPS services out there that will give you a few for free. "
    }


      ]

  return (
    <>
      <div className="column_grid_wrapper">
        <AboutColumn about_column_text="Retention KPI's are all about retaining customers or figuring out why customers are abandoning your funnel." />
        {retention.map((retentionData) => (
          <Column
            header={retentionData.header}
            body={retentionData.definition}
            indicator={retentionData.indicator}
            benchmark={retentionData.benchmark}
            moreInfo={retentionData.moreInfo}
          />
        ))}
      </div>
    </>
  )
}

export default ColumnGrid
