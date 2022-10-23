datadrivencv::use_datadriven_cv(
  full_name = "Shannon Ricci",
  data_location = "https://docs.google.com/spreadsheets/d/1LqX7AzJDC03nr9K6mF6LdEPIoHdADBuLbi_IDqlKTnc/edit#gid=917338460",
  pdf_location = "https://github.com/swricci/my-cv/blob/main/ricci_cv.pdf",
  html_location = "https://swricci.github.io/my-cv/",
  source_location = "https://github.com/swricci/my-cv")


# Knit the HTML version
rmarkdown::render("cv.rmd",
                  params = list(pdf_mode = FALSE),
                  output_file = "cv.html")

# Knit the PDF version to temporary html location
tmp_html_cv_loc <- fs::file_temp(ext = ".html")
rmarkdown::render("cv.rmd",
                  params = list(pdf_mode = TRUE),
                  output_file = tmp_html_cv_loc)

# Convert to PDF using Pagedown
pagedown::chrome_print(input = tmp_html_cv_loc,
                       output = "cv.pdf")