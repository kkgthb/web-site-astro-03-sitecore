# Make sure my Sitecore-specific environment variables are all set correctly

$http_request_splat = @{
    Uri    = [Environment]::GetEnvironmentVariable('SITECORE_API_HOST', 'User') + [Environment]::GetEnvironmentVariable('SITECORE_LAYOUT_SERVICE_PATH', 'User')
    Method = 'GET'
    Body   = @{
        sc_site   = [Environment]::GetEnvironmentVariable('SITECORE_SITE_NAME', 'User')
        sc_apikey = [Environment]::GetEnvironmentVariable('SITECORE_API_KEY', 'User')
        item      = '/'
    }
}

$http_response = $null;
$http_response = Invoke-RestMethod @http_request_splat

@"
Here is your raw HTTP response, 
  for troubleshooting, 
  if it came back at all 
  (you might have gotten an HTTP error):

$($http_response | ConvertTo-Json -Depth 100)

-----
"@ | Write-Host

If ($http_request_splat.Body.item -eq ${http_response}?.sitecore?.context?.itemPath) {
@"
If you are not surprised that 
  the display name of your input URL '$($http_request_splat.Body.item)' 
  is '$($http_response.sitecore.route.displayName)', 
  then you have successfully queried a 
  Sitecore Layout Service REST API endpoint.  
Congratulations.
  You must have set your environment variables correctly.
"@ | Write-Host
}
Else {
    @"
Whoops.
  The response (if it came back at all -- you might have gotten an HTTP error) 
  did not have a .sitecore.context.itemPath 
  that matched your `Body.item` input.
"@ | Write-Host
}