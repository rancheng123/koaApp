type Company struct {
    IDModel
    Name         string    `gorm:"type:varchar(200)" json:"name"`
    SuperAdminID uint64    `json:"-"`
    Users        []*EAUser `gorm:"many2many:ea_user_to_companies;" json:"users"`
}



db.WithContext(ctx)
    .Table("ea_user_to_projects")
    .Preload("Company")
    .Preload("Files", func(db *gorm.DB) *gorm.DB {
        return db.Order("ea_session_files.created_at ASC")
    })
    .First(&eaUser, "email=? and password=?", email, password)
    .Where("project_id = ?", projectId)
    .Pluck(
        "ea_user_id", &projectEAUserIds)
    .Model(&EAUser{})
.Order("CONVERT( display_name USING gbk ) COLLATE gbk_chinese_ci ASC")
    .Offset(offset)
    .Limit(limit)
    .Find(&field, "id=?", fieldId)
    .Count(&count)
.Create(eaUser)
    .Updates(data)

    .Raw("SELECT ea_user_id FROM ea_user_to_projects WHERE ea_user_id=? AND project_id=?", u.ID, projectId)
    .Scan(&result)
.Distinct(field.Name)












//筛选
eventQuery := ckdb.WithContext(ctx).Table("event").Where("project_id=? and toDate(server_create_time) "+
    "between toDate(?) and toDate(?)", projectId, eventRules.TimeParams[0], eventRules.TimeParams[1])

if eventConditions != "" {
    eventQuery = eventQuery.Where(eventConditions, eventSqlValues...)
}

if err = eventQuery.Pluck("session_id", &sessionIds).Error; err != nil {
    return nil, resUserIds, 0, err
}
// 根据eventQuery
if err = db.WithContext(ctx).Table("ea_sessions").Where(
    "id in ? and status = 1 and duration > 4", sessionIds).Pluck(
    "user_id", &userIds).Error; err != nil {
    return nil, resUserIds, 0, err
}

// 列表去重
userIds = ea_utils.RemoveRepUint64ByMap(userIds)
sessionIds = ea_utils.RemoveRepUint64ByMap(sessionIds)

userQuery := db.WithContext(ctx).Model(&User{}).Where("id in ?", userIds)
userIdsQuery := db.WithContext(ctx).Model(&User{}).Where("id in ?", userIds) // 用同一个userQuery会导致结果为空
sessionQuery := db.WithContext(ctx).Table("ea_sessions").Where(
    "id in ? and status = 1 and duration > 4", sessionIds)
if err = userQuery.Preload("EASessions", func(db *gorm.DB) *gorm.DB {
    return db.WithContext(ctx).Where("id in ? and status = 1 and duration > 4", sessionIds)
}).Order("last_session_time desc").Offset(offset).Limit(limit).Find(&users).Error; err != nil {
    return nil, resUserIds, 0, err
}
if err = userIdsQuery.Order("last_session_time desc").Pluck("id", &resUserIds).Error; err != nil {
    return nil, resUserIds, 0, err
}
if err = sessionQuery.Count(&eaSessionCount).Error; err != nil {
    return nil, resUserIds, 0, err
}
// 获取已读列表
readEASessionIds, err := readEASessionRecordMgr.QueryReadEASessionRecordIds(ctx, currentUserId, projectId)
if err != nil {
    return nil, resUserIds, 0, err
}

for _, user := range users {
    subData := user.JsonUserBase()
    eaSessions := []map[string]interface{}{}
    for _, eaSession := range user.EASessions {
        isRead := false
        sessionData := eaSession.JsonEASessionBase()
        if ea_utils.InNumArray(readEASessionIds, eaSession.ID) {
            isRead = true
        }
        sessionData["isRead"] = isRead
        eaSessions = append(eaSessions, sessionData)
    }
    subData["eaSessions"] = eaSessions
    resData = append(resData, subData)
}


















