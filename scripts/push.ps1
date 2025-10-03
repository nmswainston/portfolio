Param(
    [string]$Message = "quick save"
)

Write-Host "Staging changes..." -ForegroundColor Cyan
git add -A

# If nothing to commit, still attempt a push
git diff --cached --quiet 2>$null
$noStagedChanges = $LASTEXITCODE -eq 0
git diff --quiet 2>$null
$noWorkingChanges = $LASTEXITCODE -eq 0

if ($noStagedChanges -and $noWorkingChanges) {
    Write-Host "No changes to commit. Pushing existing commits..." -ForegroundColor Yellow
} else {
    Write-Host "Committing with message: $Message" -ForegroundColor Green
    git commit -m $Message | Out-Host
}

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if (-not $branch -or $branch -eq "HEAD") {
    Write-Error "Could not determine current branch."
    exit 1
}

Write-Host "Pushing to origin/$branch ..." -ForegroundColor Cyan
git push -u origin $branch | Out-Host

if ($LASTEXITCODE -ne 0) {
    Write-Error "Push failed. Try: git pull --rebase origin $branch, resolve conflicts, then rerun."
    exit $LASTEXITCODE
}

Write-Host "Done." -ForegroundColor Green


