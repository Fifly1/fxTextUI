local function drawText(text)
    SendNUIMessage({
        action = 'drawText',
        text = text
    })
end

local function hideText()
    SendNUIMessage({
        action = 'hideText',
    })
end

RegisterNetEvent('fx_textui:DrawText', function(text)
    drawText(text)
end)

RegisterNetEvent('fx_textui:HideText', function()
    hideText()
end)

exports('DrawText', drawText)
exports('HideText', hideText)
