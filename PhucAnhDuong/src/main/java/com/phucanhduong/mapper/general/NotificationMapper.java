package com.phucanhduong.mapper.general;

import com.phucanhduong.dto.general.NotificationRequest;
import com.phucanhduong.dto.general.NotificationResponse;
import com.phucanhduong.entity.general.Notification;
import com.phucanhduong.mapper.GenericMapper;
import com.phucanhduong.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = MapperUtils.class)
public interface NotificationMapper extends GenericMapper<Notification, NotificationRequest, NotificationResponse> {

    @Override
    @Mapping(source = "userId", target = "user")
    Notification requestToEntity(NotificationRequest request);

    @Override
    @Mapping(source = "userId", target = "user")
    Notification partialUpdate(@MappingTarget Notification entity, NotificationRequest request);

}
