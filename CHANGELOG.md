# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased

## v0.3.0-rc.0 - 07-12-2021

### BREAKING CHANGES

- ⚠️ the new official docker image of `kube-green` is `kubegreen/kube-green`

### Added

- Handle cron job suspend in SleepInfo sleep and wake up.
  Cron Jobs are now optionally suspended on sleep and resumed on wake up. To enable it, set `spec.suspendCronJobs = true` in the SleepInfo CRD.
- support for kubernetes version 1.19+

## v0.2.0 - 04-08-2021

### Added

- add excludeRef in SleepInfo CRD

### Fixed

- improved parallel reconciliation: now run 10 parallel reconciliation workflow and the flows in the minute around the schedule

## v0.1.0 - 03-05-2021

- Initial release
