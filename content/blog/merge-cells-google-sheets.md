---
slug: "merge-cells-google-sheets"
title: "How to merge cells in Google Sheets?"
description: "Learn about the tool of merging cells in Google Sheets with our step-by-step guide. Understand the utility of cell merging, follow easy steps to merge cells, and useful tips for effective spreadsheet organization. Troubleshoot common issues and get answers to FAQs for a smooth merging experience."
metaTitle: "How to merge cells in Google Sheets - Easy Steps"
metaDescription: "Learn how to merge cells in Google Sheets with our guide. Step-by-step instructions, tips, troubleshooting, and FAQs to optimize your spreadsheet layout."
keywords: "Google sheets, merging cells, how to merge cells, how to merge cells in google sheets"
author: "Harsh Shah"
authorProfile: "https://linkedin.com/in/harshshahseo"
coverImgAlt: "Illustration of how to merge cells in google sheets"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/sheets_image_7084ff599c.webp","width":1100,"height":550}
metaImage: []
jsonld: []
createdAt: "2024-05-06T00:16:14.258Z"
updatedAt: "2026-06-22T05:06:35.018Z"
publishedAt: "2026-06-22T05:06:22.803Z"
---
<p style="font-size: inherit;">Merging cells in Google Sheets joins two or more selected cells into one. Select the cells, open Format, then Merge cells, and pick Merge all, Merge horizontally, or Merge vertically.</p>

<p>One thing to know up front: a standard merge keeps only the value in the top-left cell and clears the rest. If you need to keep every value, you combine the cells with a formula instead. This guide covers both, plus how to unmerge and a cleaner alternative when you only want the look of a merge.</p>

<h2>What Cells Are in Google Sheets</h2>

<p>A cell is one box in the grid, named by its column letter and row number: A1, B2, C3. Columns run vertically (A, B, C), rows run horizontally (1, 2, 3).</p>

<p>Merging takes a block of these cells and turns it into a single, larger cell. That is the move behind every clean title row and spanning header you have seen in a sheet.</p>

<h2>When to Merge Cells (and When Not To)</h2>

<p>Merge cells when you want a header to span several columns, a clean title at the top of a report, or a label that sits across a group of data. It is a layout tool.</p>

<p>Do not merge cells inside a range you plan to sort, filter, or run formulas across. Merged cells break those operations and throw errors. If the data is live, keep it unmerged and use Center across selection (covered below) for the same visual result.</p>

<h2>A Quick Example</h2>

<p>Say you collect signups through a form that feeds a Google Sheet (Formester forms write straight to Sheets through the native <a href="https://formester.com/blog/integrating-google-forms-google-sheets-a-match-made-in-digital-heaven-essential-basics/">Google Sheets integration</a>). You want a single title across the name, email, and status columns at the top. Merging those three header cells gives you one clean banner instead of three half-filled boxes.</p>

<h2>How to Merge Cells in Google Sheets: Step by Step</h2>

<ul>
<li>Select the cells. Click and drag to highlight the adjacent cells you want to merge. They have to be next to each other in a continuous block.</li>
<li>Open the merge menu. Go to Format in the top menu, then click Merge cells. You can also click the merge icon in the toolbar for the same options.</li>
<li>Pick how to merge. Choose one of three:
<ul>
<li>Merge all: combines every selected cell into one large cell.</li>
<li>Merge horizontally: merges each row of the selection into a single wide cell.</li>
<li>Merge vertically: merges each column of the selection into a single tall cell.</li>
</ul>
</li>
</ul>

<p>Quick path with the keyboard: open the Format menu with the toolbar merge button rather than hunting for a shortcut. Google Sheets has no fixed default merge hotkey, so power users assign one with a macro under Extensions, then Macros.</p>

<h2>How to Merge Cells Without Losing Data</h2>

<p>The standard merge keeps only the top-left value and deletes the rest. When you actually need to keep both values, combine the cells with a formula instead of merging them.</p>

<h3>Ampersand operator (&amp;)</h3>

<p>The fastest way to join two cells. Put a space in quotes between them so the values do not run together:</p>

<ul>
<li>=A1&amp;" "&amp;B1 turns "Jane" and "Doe" into "Jane Doe".</li>
</ul>

<h3>CONCATENATE function</h3>

<p>Does the same thing, spelled out, which some teams prefer for readability:</p>

<ul>
<li>=CONCATENATE(A1," ",B1) returns "Jane Doe".</li>
</ul>

<h3>TEXTJOIN for a whole range</h3>

<p>When you are joining many cells, TEXTJOIN handles the range and the separator in one go and skips blanks:</p>

<ul>
<li>=TEXTJOIN(" ",TRUE,A1:D1) joins everything in A1 through D1 with a single space between each value.</li>
</ul>

<p>Pick the separator to match the data: a space for names, a comma for lists, a line break with CHAR(10) for stacked addresses.</p>

<h2>Center Across Selection: The Look of a Merge Without the Problems</h2>

<p>If you only want a title to look centered across several columns, you do not have to merge at all. Center across selection gives the same visual span while keeping every cell intact, so sorting and formulas still work.</p>

<ul>
<li>Type your text in the leftmost cell of the range.</li>
<li>Select the leftmost cell plus the empty cells you want it to span.</li>
<li>Set horizontal alignment to Center using the toolbar align button.</li>
</ul>

<p>The text now sits centered across the group, but the cells underneath stay separate. This is the safer choice for any header that sits on top of live data.</p>

<h2>Things to Remember Before You Merge</h2>

<ul>
<li>Plan the layout first. Merging is hard to work around later, so decide where headers and titles go before you commit.</li>
<li>Use it sparingly. Too many merged cells make a sheet hard to navigate, sort, and edit.</li>
<li>Keep it off live data. Never merge inside a range you sort, filter, or run formulas across; use a formula or Center across selection instead.</li>
<li>Format after merging. Set alignment, borders, and fill on the merged cell to finish the look.</li>
</ul>

<h2>How to Unmerge Cells</h2>

<ul>
<li>Click the merged cell you want to split back apart.</li>
<li>Open Format, then Merge cells, and choose Unmerge. (You can also click the merge icon again to toggle it off.)</li>
</ul>

<p>The cells split back to their original grid. One thing to expect: the value that survived the merge stays in the top-left cell, and the others come back empty. There is no way to recover data that the merge deleted, so undo with Ctrl+Z if you unmerged by mistake.</p>

<h2>Common Problems and How to Fix Them</h2>

<ul>
<li>Lost data after a merge: only the top-left value survives a standard merge. Undo with Ctrl+Z, then combine the cells with a formula instead.</li>
<li>Merge option greyed out: your selection is not a continuous block, or the cells sit inside a table or protected range. Reselect an adjacent block and try again.</li>
<li>Sorting or filtering throws an error: a merged cell sits inside the range. Unmerge it, or switch the header to Center across selection.</li>
<li>Merged cells break on export: merged formatting can shift when a sheet opens in Excel or another tool. If portability matters, keep the data unmerged.</li>
</ul>

<h2>Merging Cells in Excel and Google Docs</h2>

<p>The idea carries over, the path changes:</p>

<ul>
<li>Excel: select the cells, then Home, then Merge &amp; Center (it has a dropdown for Merge Across and Merge Cells). Excel also warns before deleting the non-top-left values.</li>
<li>Google Docs tables: select the cells in the table, right-click, and choose Merge cells. Docs cannot merge cells outside a table.</li>
</ul>

<p>If you move sheets between Google and Excel often, lean on formulas over merges; they survive the round trip cleanly.</p>

<h2>Put Your Sheet on Autopilot</h2>

<p>Merging is a layout finish, not a data tool. Reach for it on headers and titles, reach for formulas when you need to keep values, and reach for Center across selection when you just want the look.</p>

<p>If you are merging header rows on a sheet that you update by hand, the bigger win is getting data into it automatically. Connect a form to your sheet and new responses land as fresh rows with no copy-paste: see how to send form responses straight to Google Sheets.</p>

<section class="faq">
<h2>Frequently Asked Questions</h2>
<details><summary>How do you merge cells in Google Sheets?</summary><div>Select the cells, open the Format menu, choose Merge cells, then pick Merge all, Merge horizontally, or Merge vertically. The toolbar merge icon does the same thing.</div></details>
<details><summary>How do you merge cells without losing data?</summary><div>A normal merge keeps only the top-left value. To keep every value, combine the cells with a formula instead: =A1&amp;" "&amp;B1 or =CONCATENATE(A1," ",B1) for two cells, and =TEXTJOIN(" ",TRUE,A1:D1) for a whole range.</div></details>
<details><summary>Can you merge non-adjacent cells in Google Sheets?</summary><div>No. Google Sheets only merges adjacent cells in a continuous block. To pull together values that are not next to each other, use a CONCATENATE or TEXTJOIN formula.</div></details>
<details><summary>Will merging cells affect my formulas?</summary><div>Merging can break formulas, sorting, and filtering that run across the merged range. Keep merges out of live data ranges and use Center across selection for the visual look instead.</div></details>
<details><summary>How do you unmerge cells in Google Sheets?</summary><div>Select the merged cell, open Format, choose Merge cells, and pick Unmerge. The surviving value stays in the top-left cell and the others come back empty.</div></details>
</section>
